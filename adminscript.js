// Assuming you have a button with ID 'addProductBtn' that opens a modal to add a product
document.getElementById('addProductBtn').addEventListener('click', function() {
    // Clear the form fields
    document.getElementById('productFormContent').reset();
    $('#productForm').modal('show'); // Show the modal
});

// Handle the save button click
document.getElementById('saveProductBtn').addEventListener('click', function() {
    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productStock = parseInt(document.getElementById('productStock').value);
    const productImage = document.getElementById('productImage').value;

    const newProduct = {
        id: Date.now(), // Generate a unique ID using timestamp
        name: productName,
        price: productPrice,
        stock: productStock,
        image: productImage
    };

    // Send the new product to the server
    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // Log success message
        $('#productForm').modal('hide'); // Hide the modal
        // Optionally, refresh the product table to show the new product
        loadProducts(); // Call a function to refresh the product list
    })
    .catch(error => console.error('Error adding product:', error));
});

// Function to load products from the server and display them in the table
function loadProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productTableBody = document.querySelector('#productTable tbody');
            productTableBody.innerHTML = ''; // Clear existing rows

            products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.stock}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editProduct(${product.id})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Delete</button>
                    </td>
                `;
                productTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading products:', error));
}

// Call loadProducts on page load to display existing products
document.addEventListener('DOMContentLoaded', loadProducts);

// You need a backend server to handle the '/api/products' endpoint
// This backend server needs to be able to:
// 1. Read data from db.json
// 2. Add new products to db.json
// 3. Update existing products in db.json
// 4. Delete products from db.json

// Here's a simple example using Node.js and Express:
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON request bodies

// Read products from db.json
app.get('/api/products', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading products');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Add a new product to db.json
app.post('/api/products', (req, res) => {
  const newProduct = req.body;

  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading products');
    } else {
      let products = JSON.parse(data);
      products.push(newProduct);
      fs.writeFile('db.json', JSON.stringify(products), err => {
        if (err) {
          res.status(500).send('Error writing products');
        } else {
          res.json({ message: 'Product added successfully' });
        }
      });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});