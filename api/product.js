const express = require('express');
const router = express.Router();
const user = require('../middleware/usuario.js');
const auth = require('../middleware/auth.js');

let products = [
  {id: 1, name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
  {id: 2, name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
  {id: 3, name: 'Pendrive', price: 10, quantity: 10, colors: [] },
  {id: 4, name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
  {id: 5, name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
  {id: 6, name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
  {id: 7, name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
  {id: 8, name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
  {id: 9, name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
  {id: 10, name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

router.get('/', (req, res) =>{
    res.send('express node');
});

router.get('/product/:id', (req, res) =>{
  try{
    let id = req.params.id;
    let productsFind = products.find(p => p.id == id);
    res.status(200).json({
      message: 'OK',
      data: productsFind
    });
  }catch{
    res.status(404).json({
      message: 'Error'
    });
  }
});

router.get('/products', user, auth, (req, res) =>{
  res.status(200).json({
    products
  });
});

router.post('/products', (req, res) =>{
  try{
    let obj = req.body;
    products.push(obj);
    res.status(201).json({
      message: 'Agregado',
      data: obj
    });
  }catch{
    res.status(404).json({
      message: 'Error'
    });
  }
});

router.delete('/products/:id', (req, res) =>{
  try{
    let id = req.params.id;
    products = products.filter(p => p.id != id);
    res.status(200).json({
      message: 'OK',
      data: products
    });
  }catch{
    res.status(400).json({
      message: 'Error'
    });
  }
});

router.put('/products/:id', (req, res) =>{
  try{
    let id = req.params.id;
    let body = req.body;
    let product = products.find(p => p.id == id)
    product.name = body.name ? body.name : product.name
    product.price = body.price ? body.price : product.price
    product.quantity = body.quantity ? body.quantity : product.quantity
    product.colors = body.colors ? body.colors : product.colors
    res.status(200).json({
      products
    });
  }catch{
    res.status(400).json({
      message: 'Error'
    });
  }
});

module.exports = router;