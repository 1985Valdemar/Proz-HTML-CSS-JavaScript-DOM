document.addEventListener("DOMContentLoaded", function() {
    // Adicionando o título
    const titulo = document.getElementById("titulo");
    titulo.innerText = "Bem-vindo à Loja Online";

    // Adicionando um elemento de mensagem
    const mensagem = document.createElement("p");
    mensagem.innerText = "Este site foi criado com JavaScript!";
    mensagem.classList.add("mensagem");

    // Adicionando a mensagem ao corpo do documento HTML
    document.body.appendChild(mensagem);

    // Criando e adicionando um produto
    const produto = document.createElement("div");
    produto.classList.add("produto");

    const nomeProduto = document.createElement("h2");
    nomeProduto.innerText = "Produto A";

    const descricaoProduto = document.createElement("p");
    descricaoProduto.innerText = "Este é um produto de alta qualidade com características incríveis.";

    const precoProduto = document.createElement("p");
    precoProduto.innerText = "Preço: R$ 99,99";

    produto.appendChild(nomeProduto);
    produto.appendChild(descricaoProduto);
    produto.appendChild(precoProduto);

    document.body.appendChild(produto);
});
