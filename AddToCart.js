document.addEventListener('DOMContentLoaded', () => {
    // Retrieve cart from localStorage or initialize as an empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items-container');
    const totalPrice = document.getElementById('cart-total');

    // // Function to update the cart display
    // function updateCartDisplay() {
    //     cartItemsContainer.innerHTML = ''; // Clear current items
    //     let total = 0;
    //     cart.forEach(item => {
    //         const li = document.createElement('li');
    //         li.className = 'list-group-item';
    //         li.textContent = `${item.name} - ₱${item.price}`;
    //         cartItemsContainer.appendChild(li);
    //         total += item.price; // Accumulate total price
    //     });
    //     totalPrice.textContent = `Total: ₱${total}`; // Update total price display
    // }

    // Function to add a product to the cart
    function addToCart(product) {
        cart.push(product); // Add product to cart array
        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
        // updateCartDisplay(); // Refresh cart display
    }

    // Event listeners for "Add to Cart" buttons
    Array.from(document.getElementsByClassName('addtocart')).forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.card'); // Find the closest product card
            const product = {
                id: productCard.id, // Get product ID from card ID
                name: productCard.querySelector('.card-title').textContent, // Get product name
                price: parseFloat(productCard.querySelector('.card-price').textContent.replace('₱', '').replace(',', '')) // Parse price as a float
            };
            addToCart(product); // Add product to cart
        });
    });

    // Initial display update on page load
    // updateCartDisplay();
});