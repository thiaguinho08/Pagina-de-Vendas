let carrinho = [];
let quantidadeItens = 0;
let favoritos = [];

// Atualizar carrinho
function atualizarCarrinho() {
    document.getElementById("quantidadeItens").innerText = quantidadeItens;
}

// Adicionar aos favoritos
document.querySelectorAll('.favoritar').forEach(button => {
    button.addEventListener('click', function () {
        const produto = this.closest('.produto');
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));

        if (!favoritos.some(item => item.nome === nome)) {
            favoritos.push({ nome, preco });
            atualizarListaFavoritos();
        }
    });
});

// Atualizar lista de favoritos
function atualizarListaFavoritos() {
    const container = document.getElementById("favoritosContainer");
    container.innerHTML = "";

    favoritos.forEach(favorito => {
        const div = document.createElement("div");
        div.classList.add("favorito-item");
        div.innerHTML = `
            <span>${favorito.nome} - R$${favorito.preco.toFixed(2)}</span>
            <button class="removerFavorito">❌</button>
        `;
        div.querySelector(".removerFavorito").addEventListener("click", () => {
            favoritos = favoritos.filter(item => item.nome !== favorito.nome);
            atualizarListaFavoritos();
        });

        container.appendChild(div);
    });
}

// Mostrar/Esconder favoritos
document.getElementById("abrirFavoritos").addEventListener("click", () => {
    const listaFavoritos = document.getElementById("listaFavoritos");
    listaFavoritos.style.display = listaFavoritos.style.display === "none" ? "block" : "none";
});

// Comprar Agora
document.querySelectorAll('.comprarAgora').forEach(button => {
    button.addEventListener('click', function () {
        const produto = this.closest('.produto');
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));
        alert(`Você comprou ${nome} por R$${preco.toFixed(2)}!`);
    });
});

// Adicionar ao carrinho
document.querySelectorAll('.adicionarCarrinho').forEach(button => {
    button.addEventListener('click', function () {
        const produto = this.closest('.produto');
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));

        const itemExistente = carrinho.find(item => item.nome === nome);
        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({ nome, preco, quantidade: 1 });
        }

        quantidadeItens++;
        atualizarCarrinho();
    });
});

// Função para pesquisar produtos
document.getElementById('pesquisa').addEventListener('input', function() {
    const termoPesquisa = this.value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const nomeProduto = produto.getAttribute('data-nome').toLowerCase();
        if (nomeProduto.includes(termoPesquisa)) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
});


