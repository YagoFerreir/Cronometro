"use strict"

let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000; //Quantos milésimos valem 1 segundo?
let cron;

//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não zera o cronometro
function pause() {
    clearInterval(cron);
}

//Para o temporizador e zera o cronometro
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0; //Volta os minutos para 0
            hh++; //Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}

// Hora 


setInterval(function() {
    let novaHora = new Date()
    let hora = novaHora.getHours()
    let minuto = novaHora.getMinutes()
    let segundo = novaHora.getSeconds()

    hora = zero(hora)
    minuto = zero(minuto)
    segundo = zero(segundo)
    document.getElementById('novaHora').textContent = hora + ' : ' + minuto + ' : ' + segundo
}, 1000)


function zero(x) {
    if (x < 10) {
        x = '0' + x
    }
    return x
}

// Data

setInterval(function() {
    let novoDia = new Date()
    let dia = novoDia.getDay()
    let mes = novoDia.getMonth() + 1
    let ano = novoDia.getFullYear()

    dia = zero(dia)
    mes = zero(mes)
    ano = zero(ano)
    document.getElementById('novoDia').textContent = `${dia} / ${mes} / ${ano}`

    function zero(x) {
        if (x < 10) {
            x = '0' + x
        }
        return x
    }
})

// Ocultar Hora e data