// CUENTA REGRESIVA

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

// new Date da: Mes día, año horas:minutos:segundos. Ej: new Date("December 25, 1995 13:30:00")
const añoActual = new Date().getFullYear();

/* la fecha debe ir siempre en ingles. En caso de querer ver una fecha del año siguiente se debe poner en {añoActual + 1 }
ya que si el mes es menor al actual dara numero negativo el contador. Ej: si estamos en Julio(mes 7) y la fecha limite es Marzo (mes 3).
Es sumamente importante que la fecha vaya con estas comillas ` `  */
const fechaLimite = new Date(`July 4 ${añoActual + 1} 23:59:59`);

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
}

setInterval(updateCountdown, 1000);