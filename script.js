function searchProducts() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const productName = card.getAttribute("data-name").toLowerCase();
        if (productName.includes(searchQuery)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

let cart = [];

document.querySelectorAll(".product-card button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const card = btn.parentElement;
        const nome = card.getAttribute("data-name");
        const precoTexto = card.querySelector("p").innerText;
        const preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."));

        cart.push({ nome, preco });
        updateCart();
    });
});

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalSpan = document.getElementById("cart-total");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.preco;
    });

    totalSpan.innerText = total.toFixed(2);
}

function checkout() {
    const metodo = document.getElementById("payment-method").value;
    const conta = document.getElementById("conta").value;

    if (!conta) {
        alert("Preencha a conta ou chave Pix!");
        return;
    }

    alert(`Pagamento via ${metodo}.\nConta: ${conta}`);

    // 🔐 REDIRECIONAMENTO SEGURO (HTTPS)
    window.location.href = "https://wa.me/5516999999999";
}
    