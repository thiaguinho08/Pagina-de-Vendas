// script.js
// Função para pesquisar produtos
 document.getElementById('pesquisa').addEventListener('input', function() {
    const termoPesquisa = this.value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        const nomeProduto = produto.getAttribute('data-nome').toLowerCase();
        if (nomeProduto.includes(termoPesquisa)) {
            produto.style.display = 'block';
    }
    })
} 
