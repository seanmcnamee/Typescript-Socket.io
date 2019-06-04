//Extra to make typescript work
declare var io : {
    connect(url: string): Socket;
}

interface Socket {
    on(event: string, callback: (data:any) => void );
    emit(event: string, data: any);
}

var socket = io.connect('http://seanmcnamee.ddns.net:3000');

function sendMsg() {
    socket.emit("boo nigga", "Bitch tits");
}

socket.on('boop', data => {
    console.log(data);
});