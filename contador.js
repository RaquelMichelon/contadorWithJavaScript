window.addEventListener("load", () => {

//adicionando o evento clique
const botao = document.getElementById("botao");
botao.addEventListener("click", () => {

//nocao de evento para que o js só execute depois que a pg for carregada
//window.addEventListener("load", () => {


//tempo em segundos que queremos
let sec = 360;

const countDiv = document.getElementById("timer");

const secpass = () => {

    let min = Math.floor(sec/60);
    let segundosRestantes = sec % 60;

    if (segundosRestantes < 10) {
        segundosRestantes = "0" + segundosRestantes;
    }

    if (min < 10) {
        min = "0" + min;
    }

    //vai gerar o formato 00:00
    countDiv.innerHTML = min + ":" + segundosRestantes;

    //Condicao final
    if (sec > 0) {
        sec = sec - 1;
    }
    else {
        countDiv.innerHTML = "Acabou!";
    }
};

const countDown = setInterval(() => secpass(), 1000);

});

});