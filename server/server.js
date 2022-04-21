const express = require('express');
const pets = require('./modules/pets');
const app = express();

const port = 5001;

app.listen(port,() =>{
  console.log('serv up on:', port);
});

app.use(express.static('./server/public'));
app.use('/pets', pets);