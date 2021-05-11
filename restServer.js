import http from 'http'
import url from 'url'
import querystring from 'querystring'

import { generateRandomizedObject } from './helpers.js'

const hostname = 'localhost'
const port = 8787

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        const queryObject = querystring.parse(url.parse(req.url).query)
        let returnData = [generateRandomizedObject()]
        if (queryObject?.count) {
            for (let counter = 1; counter < queryObject.count; counter++) {
                returnData.push(generateRandomizedObject())
            }
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(returnData)); 
    } else {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Only GET method is allowed');
    }
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });