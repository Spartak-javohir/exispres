const express = require('express');

const server = express();

server.listen(3030, ()=>{
    console.log('server');
})