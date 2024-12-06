// Seleciona o parágrafo e o botão usando getElementById
const meuParagrafo = document.getElementById('texto');
const meuBotao = document.getElementById('meuBotao');
const botao3 = document.getElementById('botao3');
const botao2 = document.getElementById('botao2');

// Adiciona um event listener ao botão para escutar o clique
meuBotao.addEventListener('click', function() {
    // Muda o conteúdo do parágrafo
    meuParagrafo.textContent = 'O texto foi alterado!';
});

function passeMouse(){
    meuParagrafo.textContent = "voce tirou o mouse de cima"
}

function alteraTexto(){
}

function alteraTexto2() {
}

botao2.addEventListener('click', function() {
    // Muda o conteúdo do parágrafo
       alteraTexto2.textContent = '👻';
});

meuBotao.addEventListener("click", alteraTexto)
botao2.addEventListener("mouseover", alteraTexto2)

function clickDuasVezes(){
    alert("você clicou duas vezes")
}
function precissionaTecla(event){
    console.log('tecla pressionada: ' + event.key);
}

document.addEventListener('keydown', precissionaTecla)

function passeMouse(){
    meuParagrafo.textContent = "voce tirou o mouse de cima"
}
meuBotao.addEventListener("click",alteraTexto)
botao2.addEventListener("mouseover",passeMouse)
botao2.addEventListener("mouseout",tireMouse)
botao3.addEventListener("dblclick", clickDuasVezes)