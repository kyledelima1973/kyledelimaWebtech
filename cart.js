const cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from local storage
const cartItemsContainer = document.getElementById("cart-items-container");
const cartTotal = document.getElementById("cart-total");
document.getElementById("clear-cart").addEventListener('click',()=>{
  localStorage.removeItem('cart')
  cartItemsContainer.innerHTML=""
  cartTotal.textContent = "₱0.00"
});

// fetch('/api/products')
//           .then(response => response.json())
//           .then(data => {
//             const productList = document.getElementById('product-list');
//             data.forEach(product => {
//               const li = document.createElement('li');
//               li.innerHTML = `
//                 <img src="${product.image}" alt="${product.name}" width="100">
//                 <h3>${product.name}</h3>
//                 <p>Price: $${product.price}</p>
//                 <ul>
//                   ${product.tags.map(tag => `<li>${tag}</li>`).join('')}
//                 </ul>
//               `;
//               productList.appendChild(li);
//             });
//           })
//           .catch(error => console.error(error));


// Function to display cart items
function displayCartItems() {
    cartItemsContainer.innerHTML = ""; // Clear existing content
    let totalPrice = 0;

    cart.forEach(item => {
        const product = getProductById(item.id); // Function to get product details
        console.log(product)
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100">
            <p>${product.name}</p>
            <p>Price: ₱${product.price.toLocaleString()}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += product.price
    });

    cartTotal.textContent = `Total: ₱${totalPrice.toLocaleString()}`;
}

// Function to get product details by ID (mock data)
function getProductById(productId) {
    const products = [
        { id: 1, name: "ROG Phone 8 Edition", image: "../images/ROG PHONE 8 EDITION.png", price: 87836 },
        { id: 2, name: "ROG Phone 8", image: "../images/ROG PHONE 8.png", price: 47995 },
        { id: 3, name: "ROG Phone 7 Ultimate", image: "../images/ROG PHONE 7 Ultimate.png", price: 64950 },
        { id: 4, name: "ROG Phone 7", image: "../images/ROG PHONE 7a.png", price: 40995 },
        { id: 5, name: "ROG Phone 6D Ultimate", image: "../images/ROG Phone 6D Ultimate.png", price: 69995 },
        { id: 6, name: "ROG Phone 6", image: "../images/ROG Phone 6.png", price: 30995 },
        { id: 7, name: "ROG Strix g18 (2024) G814", image: "../images/rogstrixg18.jpg", price: 84900 },
        { id: 8, name: "ROG Zephyrus G16 (2023) GU603", image: "../images/ROG Zephyrus G16 (2023) GU603.png", price: 98700 },
        { id: 9, name: "ROG Strix SCAR 16 (2024) G634", image: "../images/ROG Strix SCAR 16 (2024) G634.png", price: 162125 },
        { id: 10, name: "ASUS TUF Gaming A14 (2024)", image: "../images/ASUS TUF Gaming A14 (2024).png", price: 104995 },
        { id: 11, name: "ASUS TUF Gaming A15 (2024)", image: "../images/ASUS TUF Gaming A15 (2024).png", price: 60995 },
        { id: 12, name: "ASUS TUF Gaming F15 (2023)", image: "../images/ASUS TUF Gaming F15 (2023).png", price: 87995 },
        { id: 13, name: "monitor", image: "../images/ASUS TUF Gaming F15 (2023).png", price: 87995 },
        { id: 14, name: "ASUS TUF Gaming F15 (2023)", image: "../images/ASUS TUF Gaming F15 (2023).png", price: 87995 },
        { id: 15, name: "ASUS TUF Gaming F15 (2023)", image: "../images/ASUS TUF Gaming F15 (2023).png", price: 87995 },
        { id: 16, name: "ASUS TUF Gaming F15 (2023)", image: "../images/ASUS TUF Gaming F15 (2023).png", price: 87995 },
        { id: 17, name: "ASUS TUF Gaming F15 (2023)", image: "../images/ASUS TUF Gaming F15 (2023).png", price: 87995 },
        { id: 18, name: "ASUS TUF Gaming F15 (2023)", image: "../images/ASUS TUF Gaming F15 (2023).png", price: 87995 },
        // Add more products as needed
    ];
    return products.filter(product => product.id == productId)[0];
}

// Call displayCartItems on page load to show cart contents
document.addEventListener('DOMContentLoaded', displayCartItems);
