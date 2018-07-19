from utils.process import Process

def read_stdout(sline):
    print("stdout >", sline)

def read_stderr(sline):
    print("stderr >", sline)

server = Process(
    "python",
    command_args = ["-u", "server.py"],
    read_stdout_callback = read_stdout,
    read_stderr_callback = read_stderr,
    verbose = True
)

while server.is_alive():
    pass