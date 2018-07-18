let ws_scheme = window.location.protocol == "https:" ? "wss://" : "ws://"

SUBMIT_URL = ws_scheme + window.location.host

console.log("SUBMIT_URL", SUBMIT_URL)

socket = io.connect(SUBMIT_URL)

console.log("socket created ok")

function onconnect(){
    console.log("socket connected ok")
    socket.emit('sioreq', {"kind": "connected"})
}

function siores(json){
    console.log("siores", json)
}

socket.on('connect', onconnect)
socket.on('siores', siores)
