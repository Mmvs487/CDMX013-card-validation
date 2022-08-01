const numeroTarjeta = document.getElementById("numeroTarjeta")

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

//Enmascarado:
//función de enmascarado
function maskify (cc) {
  return cc.split('').map((letras, idx) => idx < cc.length - 4 ? '#':letras);
}
//implementando la función de enmascarado en cuanto se alcanzan 16 dígitos
numeroTarjeta.addEventListener('keyup', (e) => {
  let numeroTarjeta = e.target.value;
  console.log(maskify(numeroTarjeta).join(''));
  if (numeroTarjeta.length==16) {
    document.getElementById("numeroTarjeta").value = maskify(numeroTarjeta).join('')
  }
});

//Validar el número de la tarjeta:
//función de validación:
function validation () {
  
}
