const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app)
const io = new Server(httpServer);

app.use( express.static(path.join(__dirname, "views")));

const socketsOnline = [];
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", socket =>{

    socketsOnline.push(socket.id);
    // emision basica
    socket.emit("welcome", "Ahora estas conectado.");
    socket.on("server", data =>{
        console.log(data);
    })
    io.emit("everyone", socket.id + " se ha conectado");
    //emision a uno solo
    socket.on("last", message => {
        const lastSocket = socketsOnline[ socketsOnline.length -1];
        //casi igual solo cambia el ultimo a caa rato
        //const lastSocket = socketsOnline.pop(); 
        io.to(lastSocket).emit("salute", message);
    })

    // on, once, off
    // socket.emit("on", "holi");
    // socket.emit("on", "holi");

    socket.emit("once", "holi");
    socket.emit("once", "holi");

    socket.emit("off", "holi");
    setTimeout(()=>{
        socket.emit("off", "holi");
    }, 3000);
});

httpServer.listen(3000);
