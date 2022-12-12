const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT ||5000;
const time=require("./middlewares/hours");


app.use (time)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/Home.html'));
});
app.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, '/service.html'));
  });
  app.get('/Contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/Contact.html'));
  });
  
 
app.listen(port);
console.log('Server started at http://localhost:' + port);