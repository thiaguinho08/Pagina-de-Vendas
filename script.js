document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const productCards = document.querySelectorAll(".product-card");

    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        productCards.forEach(card => {
            const productName = card.getAttribute("data-name").toLowerCase();
            if (productName.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});


    