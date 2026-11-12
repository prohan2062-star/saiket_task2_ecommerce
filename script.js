// Product data
const productPrice = 2499;

let quantity = 1;
let cartCount = 0;
let selectedSize = "M";
let selectedColor = "Classic Black";

// Elements
const quantityElement = document.getElementById("quantity");
const cartCountElement = document.getElementById("cartCount");
const mainImage = document.getElementById("mainImage");
const toast = document.getElementById("toast");

// Toast notification
let toastTimer;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// Product gallery
const galleryImages = [
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1000",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000",
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=1000",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000"
];

document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        const imageIndex = Number(thumbnail.dataset.image);

        mainImage.src = galleryImages[imageIndex];

        document.querySelectorAll(".thumbnail").forEach((item) => {
            item.classList.remove("active");
        });

        thumbnail.classList.add("active");
    });
});

// Color selection
document.querySelectorAll(".color-option").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".color-option").forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        selectedColor = button.dataset.color;

        document.getElementById("selectedColor").textContent = selectedColor;

        showToast(selectedColor + " selected");
    });
});

// Size selection
document.querySelectorAll(".size-option").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".size-option").forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        selectedSize = button.dataset.size;

        document.getElementById("sizeMessage").textContent =
            "Selected size: " + selectedSize;
    });
});

// Quantity decrease
document.getElementById("decreaseQty").addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
    }
});

// Quantity increase
document.getElementById("increaseQty").addEventListener("click", () => {
    if (quantity < 10) {
        quantity++;
        quantityElement.textContent = quantity;
    } else {
        showToast("Maximum quantity is 10");
    }
});

// Add to cart
document.getElementById("addToCart").addEventListener("click", () => {
    cartCount += quantity;

    cartCountElement.textContent = cartCount;

    showToast(
        quantity + " item(s) added to bag — Size " +
        selectedSize + ", " + selectedColor
    );

    quantity = 1;
    quantityElement.textContent = quantity;
});

// Wishlist
const wishlistButton = document.getElementById("wishlistButton");

wishlistButton.addEventListener("click", () => {
    wishlistButton.classList.toggle("liked");

    if (wishlistButton.classList.contains("liked")) {
        wishlistButton.innerHTML = "♥ &nbsp; ADDED TO WISHLIST";
        showToast("Added to your wishlist");
    } else {
        wishlistButton.innerHTML = "♡ &nbsp; ADD TO WISHLIST";
        showToast("Removed from wishlist");
    }
});

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// Size guide modal
const sizeModal = document.getElementById("sizeModal");

document.getElementById("sizeGuide").addEventListener("click", () => {
    sizeModal.classList.add("open");
});

document.getElementById("closeModal").addEventListener("click", () => {
    sizeModal.classList.remove("open");
});

sizeModal.addEventListener("click", (event) => {
    if (event.target === sizeModal) {
        sizeModal.classList.remove("open");
    }
});

// Close modal using Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        sizeModal.classList.remove("open");
        navLinks.classList.remove("open");
    }
});

// Cart button
document.getElementById("cartButton").addEventListener("click", () => {
    if (cartCount === 0) {
        showToast("Your shopping bag is empty");
    } else {
        showToast("Your bag contains " + cartCount + " item(s)");
    }
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();