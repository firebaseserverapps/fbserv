from utils.process import runcmd

runcmd(
    "dir",
    command_args = [".", "invaliddir"],
    color = "BRIGHTYELLOW"
)

