from utils.process import runcmd

runcmd({
    "command": "dir",
    "command_args": [".", "invaliddir"],
    "color": "BRIGHTYELLOW",
    "verbose": True
})

