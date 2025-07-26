import express from 'express';

const app = express();

const PORT = 8000;

// Middleware to parse JSON bodies
app.get("/", (req, res) => {
  res.send("Welcome to the Express server!"); 
});

app.get(("/products"), (req, res) => {
  res.json({
    products: [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
