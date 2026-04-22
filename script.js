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

let carrinho = [];

function addCarrinho(botao) {
    const card = botao.parentElement;

    const nome = card.getAttribute("data-name");

    const precoTexto = card.querySelector("p").innerText;
    const preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."));

    carrinho.push({ nome, preco });

    alert(nome + " adicionado ao carrinho!");
}

function abrirCarrinho() {
    document.getElementById("carrinhoTela").style.display = "block";
    atualizarCarrinho();
}

function fecharCarrinho() {
    document.getElementById("carrinhoTela").style.display = "none";
}

function atualizarCarrinho() {
    const lista = document.getElementById("cart-items");
    const totalSpan = document.getElementById("cart-total");

    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2)}
            <button onclick="removerItem(${index})">❌</button>
        `;

        lista.appendChild(li);
        total += item.preco;
    });

    totalSpan.innerText = total.toFixed(2);
}

function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function checkout() {
    const metodo = document.getElementById("payment-method").value;
    const conta = document.getElementById("conta").value;

    if (!conta) {
        alert("Preencha a conta ou chave Pix!");
        return;
    }

    alert("Pagamento via " + metodo);

    window.location.href = "https://mpago.la/00020126360014br.gov.bcb.pix0114+55169962708145204000053039865802BR5915T202510181550266009Sao Paulo610901227-20062240520daqr2934183479538308630486F7"
}