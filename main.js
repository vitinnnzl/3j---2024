const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
tempo[0].textContent="Olá";
const tempoObjetivo1 = new Date (2025, 03, 15, 15, 00); 
const tempoObjetivo2 = new Date (2025, 11, 29, 23, 00);
const tempoObjetivo3 = new Date (2024, 03, 16, 30, 00);
const tempoObjetivo4 = new Date (2025, 06, 04, 17, 45);

function calculaTempo(tempoObjetivo){
    const agora = new Date()
let segundos;
let minutos;
let horas;
let dias;

segundos=Math.floor((tempoObjetivo-agora)/1000)
minutos=Math.floor(segundos/60)
horas=Math.floor(minutos/60)
dias=Math.floor(horas/24)

segundos = segundos%60
minutos = minutos%60
horas = horas%24
if(segundos >=0){
    return `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`
} else {
    return `Prazo finalizado!`
}


}


tempo[0].textContent = calculaTempo(tempoObjetivo1);
tempo[1].textContent = calculaTempo(tempoObjetivo2);
tempo[2].textContent = calculaTempo(tempoObjetivo3);
tempo[3].textContent = calculaTempo(tempoObjetivo4)




console.log(tempo);
for(let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
