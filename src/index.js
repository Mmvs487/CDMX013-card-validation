import validator from './validator.js';
ar datosTarjeta = $('#datosTarjeta');
function soloNumeros(evt) {
    evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
      evt.preventDefault();
    } else {
      return true;
    }
  }

  function mascaraTarjeta(evt) {
    evt = (evt) ? evt : window.event;
    let numeroTarjeta = document.getElementById("numeroTarjeta").value
    if (numeroTarjeta.length <= 4) {
      return numeroTarjeta;
    } else {
      var masked =
        numeroTarjeta.substring(0, numeroTarjeta.length - 4).replace(/\d/g, "#") +
        numeroTarjeta.substring(numeroTarjeta.length - 4, numeroTarjeta.length);
      return masked;
    }
  }

console.log(validator);
