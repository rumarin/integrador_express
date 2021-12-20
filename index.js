const express = require('express');
const app = express();
app.use(express.json());
const product = require('./api/product')
app.use('/api', product);
app.listen(3000, () => console.log('servidor'));

