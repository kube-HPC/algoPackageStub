
//const config = require('../src/config')
//const app = require('express')();
const http = require('http');
const server = require('http').createServer();
const io = require('socket.io')(server);
//const io = socketServer.listen(5000)
const { incomingCommands, messages, outgoingCommands } = require('./stub');
//app.listen(5000);
const serverInit = () => {
    server.listen(process.env.WORKER_SOCKET_PORT || "3000");
    io.on('connection', (socket) => {
        // this._sockets.push(socket);
        socket.emit(outgoingCommands.initialize, messages.initMessage)
        socket.on(incomingCommands.initialized, () => {
            console.log(`initialized`);
            socket.emit(outgoingCommands.start)
            // setTimeout(()=>{
            //     console.log(`sending stop`);
            //     socket.emit(outgoingCommands.stop)
            // },5000)
        })
        socket.on(incomingCommands.error, err => console.log(`error: ${JSON.stringify(err)}`))
        socket.on(incomingCommands.stopped, () => console.log('stopped'))
        socket.on(incomingCommands.started, () => console.log('started'))
        socket.on(incomingCommands.done, res => {
            console.log(`done with message:${JSON.stringify(res)} `)
            // socket.emit(outgoingCommands.exit)
        });
        socket.on('disconnect', () => {
            console.log('disconnect!!!')
            // this._sockets = this._sockets.filter(s => s !== socket)
        })
        console.log('connection!!!')
    })


}


serverInit();




