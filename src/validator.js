const validator = {
  // ...
};

function soloNumeros(evt) {
  evt = (evt) ? evt : window.event;
  let charCode = (evt.which) ? evt.which : evt.keyCode;
  if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
    evt.preventDefault();
  } else {
    return true;
  }
}
import validator from './validator.js';

console.log(validator);

export default validator;
