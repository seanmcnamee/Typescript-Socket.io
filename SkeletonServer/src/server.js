"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//set server up
const express = require("express");
const path = require("path");
const app = express();
app.set("port", process.env.PORT || 3000);
let http = require("http").Server(app);
let io = require("socket.io")(http);
//Certain extentions make certain thigns happen
app.get("/", (req, res) => {
    res.sendFile(path.resolve("../Skeleton/html/index.html"));
});
//User joins
io.on("connection", function (socket) {
    console.log("Someone here - boo");
    //Wait for the client to do shit
    socket.on("boo", function (message) {
        console.log("From client: " + message);
        socket.broadcast.emit("boop", message);
    });
});
const server = http.listen(3000, function () {
    console.log("listening on *.3000");
});
//# sourceMappingURL=server.js.map
