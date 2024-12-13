document.getElementById('checkout-button').addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before checking out.");
        return;
    }

    // Here you can implement the logic to process the checkout
    // For example, you can send the cart data to your server for processing
    alert("Proceeding to checkout with the following items:\n" + cart.map(item => `${item.name} - ₱${item.price}`).join('\n'));

    // After checkout, you might want to clear the cart
    localStorage.removeItem('cart');
    // Optionally redirect to a confirmation page
});