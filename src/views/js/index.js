const socket = io();

socket.on("welcome", data =>{
    // esto es necesario para detectar el elemento del html
    // const text = document.querySelector('#text'); 
    //pero puede detectarlo solo
    text.textContent = data;
});

const emitToServer = document.querySelector('#emit-to-server');
emitToServer.addEventListener("click", () => {
    socket.emit("server", "Hola, servidor");
});
socket.on("everyone", message =>{
    console.log(message);
});

const emitToLast = document.querySelector('#emit-to-last');
emitToLast.addEventListener("click", ()=>{
    socket.emit("last", "Hola ultimo del servidor");
});

socket.on("salute", message => {
    console.log(message);
});

// on, once, off
socket.on("on", () => {
    console.log("Se emite varias veces");
});
socket.once("once", () => {
    console.log("Se emite solo una vez el once");
});

const listener = () => {
    console.log("Se apaga el evento");
};
socket.on("off", listener);

setTimeout(()=>{
    socket.off("off", listener)
}, 2000);