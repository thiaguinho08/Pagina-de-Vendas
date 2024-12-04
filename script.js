// script.js


function searchProducts() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const productCards = document.querySelectorAll("tenis");

    productCards.forEach(card => {
        const productName = card.getAttribute("data-name").toLowerCase();
        if (productName.includes(searchQuery)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

