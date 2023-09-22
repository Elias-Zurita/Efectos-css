// CUENTA REGRESIVA

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

// new Date da: Mes día, año horas:minutos:segundos. Ej: new Date("December 25, 1995 13:30:00")
const añoActual = new Date().getTime();

/* la fecha debe ir siempre en ingles */
const fechaLimite = new Date("July 5, 2024 00:00:00").getTime();

// Update CountdownTime
function updateCountdown(){
    const fechaActual = new Date();
    const diferencia = fechaLimite - fechaActual;

    // El metodo Math.floor redondea los numeros a enteros.
    const dias = Math.floor(diferencia / 1000 / 60 / 60 / 24);
    const horas = Math.floor(diferencia / 1000 / 60 / 60 ) % 24;
    const minutos = Math.floor(diferencia / 1000 / 60 ) % 60;
    const segundos = Math.floor(diferencia / 1000 ) % 60;

    days.innerHTML = dias;
    hours.innerHTML = horas < 10 ? '0' + horas : horas;
    minutes.innerHTML = minutos < 10 ? '0' + minutos : minutos;
    seconds.innerHTML = segundos < 10 ? '0' + segundos : segundos;

    /* Para que no siga restando cuando llega a la fecha limite (diferencia sea menor a 0) */
    if(diferencia < 0){
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
    }
}

setInterval(updateCountdown, 1000);