const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
  {
    titulo: "Broas E Pães",
    subtitulo: "Melhor do Broa Só Pães!",
    data: "31/08/2022",
    texto: "Cada Broa e Cada Pães Com Muito Carinho"
  },
]

console.log(arrayPostagens[1].titulo)
// REIDELIZAR COM LOOP

// ***************** VAI USAR O INDEX DO ARRAY
for (let i = 0; i<arrayPostagens.length; i++){
  //criando um ou mais elementos
  const artigo = document.createElement("article")

 // POPULAR ESSE ELEMENTO
 artigo.innerHTML = `
 <h3>${arrayPostagens[i].titulo}</h3>
 <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
 <div class="data">${arrayPostagens[i].data}</div>
 <p>${arrayPostagens[i].texto}</p>
 `
 // ADICIONAR AO DOM
 //ADICIONANDO PAI
 const main = document.querySelector("main")
 // ADICIONADO FILHO
 main.appendChild(artigo)
}


// ***************** usa o item inteiro off
// mais facil
for (item of arrayPostagens){
// criando um elemento
const artigo2 = document.createElement("article")
artigo2.id ="post-02"
 
// Popular esse elemento
artigo2.innerHTML = `
<h3>${item.titulo}</h3>
<p class="subtitulo">${item.subtitulo}</p>
<div class="data">${item.data}</div>
<p>${item.texto}</p>
`
 
// Adicionar ao DOM
const main = document.querySelector("main")
main.appendChild(artigo2)
}

//****************** forEach() Uma opção mais inchuta e limpa para percorrer arrays.
arrayPostagens.forEach(item => {
  const artigo3 = document.createElement("article");
  artigo3.id = "post-03";

  // Popular esse elemento
  artigo3.innerHTML = `
  <h3>${item.titulo}</h3>
  <p class="subtitulo">${item.subtitulo}</p>
  <div class="data">${item.data}</div>
  <p>${item.texto}</p>
  `;

  // Adicionar ao DOM
  const main = document.querySelector("main");
  main.appendChild(artigo3);
});  


