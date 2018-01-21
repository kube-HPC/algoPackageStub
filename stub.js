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
    error: 'error',
    done: 'done'
}

const messages = {
    initMessage: {
        data: {
            input: [
                {
                    input_file_path: `/home/matyz/dev/source/Daniel_DISC1/example_input_output/test_files.csv`,
                    json_input: '',
                    output_file_path: `/home/matyz/dev/source/Daniel_DISC1/example_input_output/output.csv`
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