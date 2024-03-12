const socket = io();

function checkSocketStatus(){
    console.log("Estado del socket: ", socket.connected);
}
socket.on("connect", ()=>{
    console.log("El socket se ha conectado: ", socket.id);
    checkSocketStatus();
});

socket.on("connect_error", ()=>{
    console.log("No puede conectarse");
});

socket.on("disconnect", ()=>{
    console.log("El socket se ha desconectado: ", socket.id);
    checkSocketStatus();
});

socket.io.on("reconnect_attempt", ()=>{
    console.log("Estoy intentando recoectarme");
});

socket.io.on("reconnect", ()=>{
    console.log("Me he vuelto a conectar");
});