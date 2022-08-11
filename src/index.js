import validator from './validator.js';

const numeroTarjeta = document.getElementById("numeroTarjeta");
const boton = document.getElementById("validar")
//Sólo digitos:
numeroTarjeta.addEventListener('keyup', digitsOnly)
function digitsOnly () {
let digitsOnly = document.getElementById('numeroTarjeta')
digitsOnly.value = digitsOnly.value
.replace(/\s/g, '')
.replace(/\D/g, '')
//.replace(/([0-9]{4})/g, '$1-');
}


//implementando isValid
boton.addEventListener('click', () => {
  console.log(validator.isValid(numeroTarjeta.value));
  numeroTarjeta.value = validator.maskify(numeroTarjeta.value);
});