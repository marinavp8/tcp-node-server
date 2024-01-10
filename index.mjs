import net from 'net';

const server = net.createServer(socket => {

    console.log("Tcp handshake successfull with " + socket.remoteAddress + ":" + socket.remotePort)
    socket.write("Hello client from server!")
    socket.on("data", data => {
        console.log("Client says: " + data)
    })
})

server.listen(8800, "127.0.0.1")