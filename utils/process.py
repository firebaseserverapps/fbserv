import threading
import os
import subprocess

class Process:
    def __init__(self,
            command,
            add_cwd_to_command = False,
            command_args = [],
            working_dir = None,
            add_cwd_to_working_dir = False,
            read_stdout_callback = None,
            read_stderr_callback = None,
            terminated_callback = None,
            verbose = False,
            **kwargs
        ):

        self.command = command
        self.add_cwd_to_command = add_cwd_to_command
        self.command_args = command_args
        self.working_dir = working_dir
        self.add_cwd_to_working_dir = add_cwd_to_working_dir
        self.read_stdout_callback = read_stdout_callback
        self.read_stderr_callback = read_stderr_callback
        self.verbose = verbose

        self.cwd = os.getcwd()

        self.command_path = self.command
        if self.add_cwd_to_command:
            self.command.path = os.path.join(self.cwd, self.command)        
        
        self.working_dir_path = self.working_dir
        if ( not ( self.working_dir is None ) ) and self.add_cwd_to_working_dir:
            self.working_dir_path = os.path.join(self.cwd, self.working_dir)

        self.command_and_args = [self.command_path]
        if not ( self.command_args is None ):
            self.command_and_args += self.command_args

        self.popen_args = {                        
            "stdin": subprocess.PIPE,
            "stdout": subprocess.PIPE,
            "stderr": subprocess.PIPE,            
            "bufsize": 1,  # Line buffering
            "universal_newlines": True,        
        }

        self.kwargs = kwargs

        self.popen_args.update(self.kwargs)

        if not ( self.working_dir_path is None ):
            self.popen_args["cwd"] = self.working_dir_path

        if self.verbose:
            print(f"open process {self.command_and_args}")
            print(f"working dir {self.working_dir_path}")
            print(f"args {self.popen_args}")

        self.process = subprocess.Popen(self.command_and_args, **self.popen_args)

        self.stdin_lock = threading.Lock()

        self.read_stdout_thread = None
        if not ( self.read_stdout_callback is None ):
            self.read_stdout_thread = threading.Thread(target = self.read_stdout_thread_target)
            self.read_stdout_thread.daemon = True
            self.read_stdout_thread.start()
            if self.verbose:
                print("read stdout thread started")

        self.read_stderr_thread = None
        if not ( self.read_stderr_callback is None ):
            self.read_stderr_thread = threading.Thread(target = self.read_stderr_thread_target)
            self.read_stderr_thread.daemon = True
            self.read_stderr_thread.start()
            if self.verbose:
                print("read stderr thread started")

    def read_stdout_thread_target(self):
        while True:
            line = self.process.stdout.readline()

            if not line:
                break

            sline = line.rstrip()

            if not ( self.read_stdout_callback is None ):
                self.read_stdout_callback(sline)

        self.process.stdout.close()
        with self.stdin_lock:
            self.process.stdin.close()

        if self.is_alive():
            self.terminate()
            self.wait_for_return_code()

        if not ( self.terminated_callback is None ):
            self.terminated_callback()

    def read_stderr_thread_target(self):
        while True:
            line = self.process.stderr.readline()

            if not line:
                break

            sline = line.rstrip()
            
            if not ( self.read_stderr_callback is None ):
                self.read_stderr_callback(sline)

    def send_line(self, sline):        
        with self.stdin_lock:
            self.process.stdin.write(sline + "\n")
            self.process.stdin.flush()

    def is_alive(self):
        return self.process.poll() is None

    def terminate(self):
        self.process.terminate()

    def kill(self):
        self.process.kill()

    def wait_for_return_code(self):
        self.process.wait()
        return self.process.returncode

    def pid(self):
        return self.process.pid

    def __repr__(self):
        return "[Process at {} (pid={})]".format(hex(id(self)), self.pid())