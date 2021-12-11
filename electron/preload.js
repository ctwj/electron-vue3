// electron/preload.js

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }

    // var zerorpc = require('zerorpc');
    // let rpcClient = new zerorpc.Client();
    // rpcClient.connect('tcp://127.0.0.0:4242')

    var zeromq = require("zeromq");
    var socket = zeromq.createSocket('rep');
    socket.bind("tcp://127.0.0.1:5502",
        function (err) {
            if (err) {
                throw err;
            }
            console.log("Bound to port 5502");

            socket.on('message', function(envetLoop, blank, data) {
                console.log(eventLoop.toString('utf8'));
                socket.send(eventLoop('utf8') + " Blancmange!");
            })

            socket.on('error', function(err) {
                console.log("error: " + err);
            })
        }
    )
})