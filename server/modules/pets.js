const express = require('express');
const router = express.Router();
let pets = [
  { name: 'Dog', species: 'dog'},
  { name: 'cat', species: 'cat'},
  { name: 'bird', species: 'bird'}
];
//routes
router.get('/', (req,res)=>{
  console.log('pets GET');
  res.send(pets);
});

router.get('/count', (req,res)=>{
  res.send('Pets count') + pets.length;
})

// export
module.exports = router;