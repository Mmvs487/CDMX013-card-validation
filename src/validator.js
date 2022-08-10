const validator = {
    maskify:function(cc){
        return cc.split('').map((letras, idx) => idx < cc.length - 4 ? '#':letras).join('');
      },
    isValid:function(numeroTarjeta){
        const reversedCardDigits = numeroTarjeta.split("").reverse(); //convirtiendo cadena a array en orden inverso
        console.log(reversedCardDigits)
        let newArray = []
        for (let i=0;i<reversedCardDigits.length; i++) { //escogiendo los números en posiciones pares
            if (i % 2 !== 0) {
                if (reversedCardDigits[i] * 2>9){//operando los números de posiciones pares y reemplazándolos en el nuevo string
                    newArray.push ((reversedCardDigits[i]*2)-9)
                }
                else if (reversedCardDigits[i] * 2 <= 9) {
                    newArray.push (reversedCardDigits[i]*2)
                }
                else {
                    newArray.push(reversedCardDigits[i])
                }; 
                    reversedCardDigits[i] = posicionesPares;
                }
                if (i % 2 !== 0 && reversedCardDigits[i] > 9) {
                    let natural = (reversedCardDigits[1] - 9); // si el numero es mayor a 9, se le resta 9 para obtener el resultado de la suma de cada dígito que lo compone y así tener un número natural
                } else if (i % 2 !== 0 && reversedCardDigits[i] <= 9) {
                 newArray.push(reversedCardDigits[i]*2);//sustituyendo los números en el array por los resultados obtenidos
                } else {
                    newArray.push(parseInt(reversedCardDigits[i]));
                    
                    function suma (acc, val) {
                        return acc + val;
                        }
                
                        let sumaTotal = newArray.reduce(suma, 0);
                       
                        if (sumaTotal % 10 === 0) {
                            return true; 
                        }
                            else  {
                            return false;
                        }
                 }}

            }}
export default validator;