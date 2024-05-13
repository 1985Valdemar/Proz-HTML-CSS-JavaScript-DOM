// Capturando os elementos do HTML
const titulo = document.getElementById("titulo");
const link = document.getElementById("link");
const listaNaoOrdenada = document.querySelector("ul");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adicionando conteúdo textual aos elementos h1 e a
titulo.innerText = "Título da Página";
link.innerText = "Link para Proz Educação";

// Adicionando itens à lista não ordenada usando innerHTML
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens à lista ordenada usando innerHTML
listaOrdenada.innerHTML = `
    <li><a href="https://www.site1.com">Site 1</a></li>
    <li><a href="https://www.site2.com">Site 2</a></li>
    <li><a href="https://www.site3.com">Site 3</a></li>
`;
