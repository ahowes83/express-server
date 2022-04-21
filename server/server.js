const express = require('express');
const app = express();

const port = 5001;

app.listen(port,() =>{
  console.log('serv up on:', port);
});

app.use(express.static('./server/public'));