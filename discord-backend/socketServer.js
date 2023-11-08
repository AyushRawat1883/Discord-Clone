const registerScoketServers = (server) =>{
    const io = require('socket.io')(server , {
        cors : {
            origin : "*",
            methords : ["GET" , "POST"],

        },
    });
    io.on("connection", (socket) =>{
        console.log("Socket connection Established" , socket.id);
    });
}

module.exports = {
    registerScoketServers,
};