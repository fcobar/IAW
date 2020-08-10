/*
npm init
npm install express
node server.js
*/


const express=require('express');
const app=express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req,res) => {
    res.send('Hola mundo!');
});

app.get('/node', (req,res) => {
    res.send(req.url);
});

var server=app.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});