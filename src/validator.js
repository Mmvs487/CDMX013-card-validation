const validator = {
// función maskify
    maskify:function(cc){
        return cc.split('').map((letras, idx) => idx < cc.length - 4 ? '#':letras).join('');
      },
// función isValid
    isValid:function(numeroTarjeta){
        const reversedCardDigits = numeroTarjeta.split("").reverse(); //convirtiendo cadena a array en orden inverso
        console.log(reversedCardDigits);
        let evens = []
        let totalSum = 0
        for (let i=0;i<reversedCardDigits.length; i++) { 
            if ([i]%2 !==0) { //escogiendo los números en posiciones pares
//                console.log (reversedCardDigits [i]);
                if ((reversedCardDigits [i]*2) >= 10) {
                   totalSum += Number(((reversedCardDigits [i]*2)-9));
                } else {
                    totalSum += Number((reversedCardDigits [i]*2));
                } 
               console.log (evens);
            }
            else {
                totalSum += Number(reversedCardDigits[i]);
            }
            }

                console.log (totalSum)
                console.log(totalSum%10===0)
        
                if (totalSum%10===0) { 
                    alert ("Tarjeta válida");
                    return true;
                    }else {
                    alert ("Número de tarjeta no válido, verifícalo e intenta de nuevo.");
                    return false;                    
                }
        }
        }
        

export default validator;