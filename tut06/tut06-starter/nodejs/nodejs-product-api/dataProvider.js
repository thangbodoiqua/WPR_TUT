const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'products.json');

// Function to retrieve data from the JSON file
function getProducts() {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

// Function to save products to the JSON file
function saveProducts(products) {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf8');
}

// Function to add a new product
function addProduct({ name, price }) {
    const products = getProducts();
    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name,
        price
    };
    products.push(newProduct);
    saveProducts(products);
    return newProduct;
}

// Function to update a product by ID
function updateProduct(id, { name, price }) {
    const products = getProducts();
    const product = products.find(product => product.id === parseInt(id, 10));
    
    if (product) {
        product.name = name || product.name;
        product.price = price || product.price;
        saveProducts(products);
        return product;
    } else {
        throw new Error('Product not found');
    }
}

// Function to delete a product by ID
function deleteProduct(id) {
    let products = getProducts();
    const productIndex = products.findIndex(product => product.id === parseInt(id, 10));
    
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        saveProducts(products);
        return { message: 'Product deleted successfully' };
    } else {
        throw new Error('Product not found');
    }
}

// Export the functions for use in API
module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
