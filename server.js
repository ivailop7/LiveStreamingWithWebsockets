const WebSocket = require('ws');
const randomInt = require('random-int');

const wss = new WebSocket.Server({ port: 8888 });

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

wss.on('connection', async (ws) => {
    ws.on('message', async (message) => {
        console.log(`${message}`);
    })
    while (true) {
        data = [
            {
                "name": "Random Int 1",
                "number": randomInt(0, 1000)
            },
            {
                "name": "Random Int 2",
                "number": randomInt(1001, 2000)
            },
            {
                "name": "Random Int 3",
                "number": randomInt(2001, 3000)
            }
            
        ]
        await sleep(1000);
        ws.send(JSON.stringify(data));
    }
});