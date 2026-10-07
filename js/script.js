// ================================
// VELVET CRUMB - SHOPPING CART
// ================================

let cartCount = 0;


// Add product to cart
function addToCart() {

    cartCount++;

    // Update cart number
    const cartNumber = document.querySelector(".cart span");

    if (cartNumber) {
        cartNumber.textContent = cartCount;
    }

    // Small notification
    showMessage("✨ Added to your cart!");
}


// Show notification
function showMessage(message) {

    const notification = document.createElement("div");

    notification.textContent = message;

    notification.className = "cart-message";

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
    }, 50);

    setTimeout(() => {
        notification.classList.remove("show");

        setTimeout(() => {
            notification.remove();
        }, 300);

    }, 2000);
}


// Contact form
function sendMessage(event) {

    event.preventDefault();

    showMessage("💌 Thank you! We'll get back to you soon.");

    event.target.reset();
}
