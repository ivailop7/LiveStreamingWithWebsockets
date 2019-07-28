#!/usr/bin/env python

import asyncio
import random
import datetime
import websockets
import json

async def handler(websocket, path):
    while True:
        data = [
            { 
              "name": "Random Int 1",
              "number": random.randint(0, 1000) 
            },
            { 
              "name": "Random Int 2", 
              "number": random.randint(1001, 2000) 
            },
            { 
              "name": "Random Int 3",
              "number": random.randint(2001, 3000) 
            }
        ]
        await websocket.send(json.dumps(data))
        await asyncio.sleep(1)

start_server = websockets.serve(handler, "127.0.0.1", 8888)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()