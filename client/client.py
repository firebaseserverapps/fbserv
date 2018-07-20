import utils
import dom

def startup():
    print("creating socket for submit url [ {} ]".format(utils.SUBMIT_URL))

    socket = io.connect(utils.SUBMIT_URL)

    print("socket created ok")

    def onconnect():
        print("socket connected ok")
        socket.emit("sioreq", {"kind": "connected"})

    def onevent(json):
        print(json)

    socket.on('connect', onconnect)
    socket.on('siores', lambda json: onevent(json))

