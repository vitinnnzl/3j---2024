const botoes  = document.querySelectorAll(".botao");
const conteudo  = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
 tempo[0]. textContent = "Olá";
const tempoObjetivo1 = new Date(2024,12,13);
const tempoObjetivo2 = new Date(2024,12,02);
const agora = new Date();
let segundos ;
segundos = (tempoObjetivo1 - agora)/1000;
segundos = Math.floor(segundos);
let minutos;
minutos = segundos/60;
minutos = Math.floor(minutos);
let horas;
horas = minutos/60;
horas = Math.floor(horas);
let dias;
dias = horas/24;
dias = Math.floor(dias);
tempo[1].  textContent = agora;
tempo[0]. textContent = tempoObjetivo1 - agora;
tempo[0].textContent = `faltam ${dias}dias, ${horas}horas, ${minutos}minutos e ${segundos}segundos`;
for (let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function(){
    for (j=0;j<botoes.length;j++){
        botoes[j].classList.remove("ativo");
        conteudo[j].classList.remove("ativo")
    }
    botoes[i].classList.add("ativo")
    conteudo[i].classList.add("ativo")
  }
}