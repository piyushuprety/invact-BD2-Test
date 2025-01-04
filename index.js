const express = require('express');
const cors = require('cors')
const { getData } = require('./data');
const { sortedProducts, filterProducts } = require('./helperFunction');

const app = express();
app.use(cors())
const port = 3000;

app.get('/products/sort/popularity', (req, res) => {
  const data = getData();
  const result = sortedProducts(data, 'rating', 'high');
  res.json({ products: result });
});

app.get('/products/sort/price-high-to-low', (req, res) => {
  const data = getData();
  const result = sortedProducts(data, 'price', 'high');
  res.json({ products: result });
});

app.get('/products/sort/price-low-to-high', (req, res) => {
  const data = getData();
  const result = sortedProducts(data, 'price', 'low');
  res.json({ products: result });
});

app.get('/products/filter/ram', (req, res) => {
  const data = getData();
  const target = req.query.ram;
  const result = filterProducts(data, 'ram', parseInt(target));
  res.json({ products: result });
});

app.get('/products/filter/rom', (req, res) => {
  const data = getData();
  const target = req.query.rom;
  const result = filterProducts(data, 'rom', parseInt(target));
  res.json({ products: result });
});

app.get('/products/filter/brand', (req, res) => {
  const data = getData();
  const target = req.query.brand;
  const result = filterProducts(data, 'brand', target);
  res.json({ products: result });
});

app.get('/products/filter/os', (req, res) => {
  const data = getData();
  const target = req.query.os;
  const result = filterProducts(data, 'os', target);
  res.json({ products: result });
});

app.get('/products/filter/price', (req, res) => {
  const data = getData();
  const target = req.query.price;
  const result = filterProducts(data, 'price', parseInt(target));
  res.json({ products: result });
});

app.get('/products', (req, res) => {
  const data = getData();
  res.json({ products: data });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
