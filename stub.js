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
        data: {
            input: [
                 'https://oralcancerfoundation.org/wp-content/uploads/2016/03/people.jpg'
                // {
                //     "confidence": 0.9999991655349731,
                //     "embedding": [],
                //     "imageData": "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",
                //     "landmark": {
                //         "leftEye": {
                //             "x": 82,
                //             "y": 92
                //         },
                //         "rightEye": {
                //             "x": 102,
                //             "y": 93
                //         },
                //         "nose": {
                //             "x": 93,
                //             "y": 103
                //         },
                //         "leftMouthCorner": {
                //             "x": 81,
                //             "y": 111
                //         },
                //         "rightMouthCorner": {
                //             "x": 102,
                //             "y": 113
                //         }
                //     },
                //     "location": {
                //         "x": 62,
                //         "y": 70,
                //         "w": 59,
                //         "h": 59
                //     },
                //     "md5": "a4b92838cf24a432708bcb86b4b3206b"
                // }
            ]
        }
    }
}
module.exports = {
    messages,
    incomingCommands,
    outgoingCommands
};