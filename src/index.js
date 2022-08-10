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


// No más de 16 caracteres:
//numeroTarjeta.addEventListener('keyup', () => {
//  if (numeroTarjeta.value.length > 16) {
//      numeroTarjeta.value = numeroTarjeta.value.slice(0, 16);
//  }
//})
//implementando isValid
boton.addEventListener('click', () => {
  console.log(validator.isValid(numeroTarjeta.value));
  numeroTarjeta.value = validator.maskify(numeroTarjeta.value);
});

//implementando la función de enmascarado en cuanto se alcanzan 16 dígitos
/*numeroTarjeta.addEventListener('focus', (e) => {
  e.target.value = digitos
  return
  let numeroTarjeta = e.target.value;
  console.log(validator.maskify(numeroTarjeta));
//  if (numeroTarjeta.length==16) {
//    document.getElementById("numeroTarjeta").value = validator.isValid(numeroTarjeta);
//  }
  if (numeroTarjeta.length==16) {
    document.getElementById("numeroTarjeta").value = validator.maskify(numeroTarjeta);
  }
});
numeroTarjeta.addEventListener('keyup',(e)=> {
  cardInput = e.target.value
})

numeroTarjeta.addEventListener('blur', (e)=> {
  digitos = e.target.value
e.target.value = validator.maskify(cardInput)
})

//Validar el número de la tarjeta:
//función de validación:
//let reverseStr = validator.isValid(numeroTarjeta)
//function validation (cc) {
//  let reverseStr = function(str) {
//    return [...str]
//  };
//}
//console.log(validator.isValid(numeroTarjeta))*/