const searchWrapper = document.querySelector(".search");
const inputBox = searchWrapper.querySelector("input");
const sugestBox = searchWrapper.querySelector(".list");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink; 


// Lista de sugestões de produtos (por exemplo, categorias ou produtos populares)
const suggestions = [
    "Tênis Nike",
    "Camiseta Adidas",
    "Smartphone Samsung",
    "Macbook Pro",
    "Fone de Ouvido JBL"
];


inputBox.onkeyup = (e) => {
    let userData = e.target.value.trim().toLowerCase(); // Dado digitado pelo usuário (em minúsculas)
    let emptyArray = [];


    // Se o usuário pressionar Enter, abrir a página do produto
    if (e.key === 'Enter' && userData) {
        webLink = `https://www.seusite.com/produtos/${formattedProductName}`;
        window.open(webLink, '_blank');
    }


    if (userData) {
        // Ao clicar no ícone, abrir o link do produto
        icon.onclick = () => {
            webLink = https://www.seusite.com/produtos/${formattedProductName}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        };


        // Filtrar sugestões com base no que o usuário digitou
        emptyArray = suggestions.filter((data) => {
            return data.toLowerCase().startsWith(userData);
        });


        // Converter sugestões filtradas para elementos <li>
        emptyArray = emptyArray.map((data) => {
            return `<li>${data}</li>`;
        });


        // Exibir a caixa de sugestões
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);


        // Adicionar evento de clique para cada item da lista
        let allList = sugestBox.querySelectorAll("li");
        allList.forEach((item) => {
            item.addEventListener("click", () => select(item));
        });


        if (e.key === 'Escape') {
            searchWrapper.classList.remove("active");
        }
    } else {
        searchWrapper.classList.remove("active"); // Ocultar a caixa de sugestões
    }
};


function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;


    // Ao selecionar um item da lista, abrir o link correspondente
    let formattedProductName = selectData.replace(/\s+/g, '-').toLowerCase();
    icon.onclick = () => {
        webLink =https://www.seusite.com/produtos/${formattedProductName}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    };


    searchWrapper.classList.remove("active"); // Ocultar as sugestões
}


function showSuggestions(list) {
    let listData;
    if (!list.length) {
        listData = `<li>${inputBox.value}</li>`;
    } else {
        listData = list.join('');
    }
    sugestBox.innerHTML = listData;
}


    