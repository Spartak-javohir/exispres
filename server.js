const { request } = require('express');
const express = require('express');
const path = require('path')
const fs = require('fs').promises

const server = express();
server.use(express.urlencoded({
    extended: true,
}))
server.use(express.json())
server.listen(3030, ()=>{
    console.log('server');
})
server.get('/', async (request, response)=>{
    const index = path.join(__dirname, 'views', 'index.html')
    const red = await fs.readFile(index, 'utf-8')
    response.sendFile(red)
   
})