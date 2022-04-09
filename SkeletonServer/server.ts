//set server up
import * as express from "express";
import * as path from "path";

const app = express();
app.set("port", process.env.PORT || 3000);

let http = require("http").Server(app);

let io = require("socket.io")(http);

//Certain extentions make certain thigns happen
app.get("/", (req: any, res: any) => {
    res.sendFile(path.resolve("../Skeleton/html/index.html"));
});

//User joins
io.on("connection", function(socket: any) {
    console.log("Someone here - boo");

    //Wait for the client to do shit
    socket.on("boo", function(message: any) {
        console.log("From client: " + message);
        socket.broadcast.emit("boop", message);
    })


});

const server = http.listen(3000, function() {
    console.log("listening on *.3000");
});
