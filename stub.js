const outgoingCommands = {
    initialize: "initialize",
    start: 'start',
    stop: 'stop'

}

const incomingCommands = {
    initialized: 'initialized',
    started: 'started',
    stopped: 'stopped',
    progress: 'progress',
    error: 'errorMessage',
    done: 'done'
}

const messages = {
    initMessage: {
        data: {
            input: [
                {
                    // input_file_path: `/example_input_output/example_input.csv`,
                    SessionGuid: 'test1',
                    SessionFilePath: `http://10.32.10.24:9000/apak-data/test3.wav`,     
                    SpeakerId: '2',               
                    output_file_path: `/example_input_output/output.csv`
                }
            ]
        }
    }
}
module.exports = {
    messages,
    incomingCommands,
    outgoingCommands
};