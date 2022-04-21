const express = require('express');
const router = express.Router();
//routes
router.get('/', (req,res)=>{
  console.log('woof');
  res.send('woof');
});

modules.exports = router;