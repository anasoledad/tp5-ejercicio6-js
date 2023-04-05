let intervaloDeTiempo;
let tiempoTotal = 0;
let horas = 0;
let minutos = 0;
let segundos = 0;

const inputHoras = document.getElementById('inputHoras');
const inputMinutos = document.getElementById('inputMinutos');
const inputSegundos = document.getElementById('inputSegundos');
const btnInicio = document.getElementById('iniciar');
const btnPausa = document.getElementById('pausar');
const btnReiniciar = document.getElementById('reiniciar');
const tiempo = document.getElementById('tiempo');

btnInicio.addEventListener('click', () => {

  horas = parseInt(inputHoras.value);
  minutos = parseInt(inputMinutos.value);
  segundos = parseInt(inputSegundos.value);


  tiempoTotal = horas * 3600 + minutos * 60 + segundos;

  intervaloDeTiempo = setInterval(() => {
    if (tiempoTotal > 0) {
        tiempoTotal--;

      const hs = Math.floor(tiempoTotal / 3600).toString().padStart(2, '0');
      const min = Math.floor((tiempoTotal % 3600) / 60).toString().padStart(2, '0');
      const seg = (tiempoTotal % 60).toString().padStart(2, '0');

      tiempo.innerHTML = `${hs}:${min}:${seg}`;
      
    } else {
 
      clearInterval(intervaloDeTiempo);
 
    }
  }, 1000);
});


btnPausa.addEventListener('click', pausarTemporizador);

function pausarTemporizador(){
  clearInterval(intervaloDeTiempo);
}

btnReiniciar.addEventListener('click', reiniciarTemporizador);

function reiniciarTemporizador(){
  clearInterval(intervaloDeTiempo);

  inputHoras.value = '0';
  inputMinutos.value = '0';
  inputSegundos.value = '0';
  tiempo.innerText = '00:00:00';
  tiempoTotal = 0;
}