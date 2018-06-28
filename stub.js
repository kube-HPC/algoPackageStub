const outgoingCommands = {
    initialize: "initialize",
    start: 'start',
    stop: 'stop',
    exit: 'exit'
}

const incomingCommands = {
    initialized: 'initialized',
    started: 'started',
    stopped: 'stopped',
    progress: 'progress',
    error: 'errorMessage',
    done: 'done',
}

const messages = {
    initMessage: {
        command: 'initialize',
        data:{
            input: [
                 { cpu: 3, duration: 10 }
            ]
        }
        
    }
}
module.exports = {
    messages,
    incomingCommands,
    outgoingCommands
};