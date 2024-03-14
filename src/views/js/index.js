const socket = io();

socket.on("welcome", data =>{
    // esto es necesario para detectar el elemento del html
    // const text = document.querySelector('#text'); 
    //pero puede detectarlo solo
    text.textContent = data;
})

const emitToServer = document.querySelector('#emit-to-server');
emitToServer.addEventListener("click", () => {
    socket.emit("server", "Hola, servidor");
})
socket.on("everyone", message =>{
    console.log(message);
})