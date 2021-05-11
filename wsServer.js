import { generateRandomizedObject } from './helpers.js'
import WebSocket from 'ws'

const port = 8282

const wss = new WebSocket.Server({ port: port })


wss.on('connection', (ws) => {
  let interval = 1500
  let deviceHeartbeat = setInterval(() => {ws.send(JSON.stringify(generateRandomizedObject()))}, interval)


  ws.on('message', (message) => {
    interval = message
    clearInterval(deviceHeartbeat)
    deviceHeartbeat = setInterval(() => {ws.send(JSON.stringify(generateRandomizedObject()))}, interval)
  })
})
