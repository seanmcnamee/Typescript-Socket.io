var socket = io.connect('http://seanmcnamee.ddns.net:3000');
function sendMsg() {
    socket.emit("boo nigga", "Bitch tits");
}
socket.on('boop', function (data) {
    console.log(data);
});
//# sourceMappingURL=client.js.map