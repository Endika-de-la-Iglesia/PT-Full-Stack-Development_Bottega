`Cree una función JS que incluya 4 argumentos. 
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
Si el número creado es mayor que 50, registre la consola "
¡El número es mayor que 50!". Si es más pequeño, registre la consola 
"¡El número es inferior a 50!"`

var numOne = 2;
var numTwo = 3;
var numThree = 5;
var numFour = 6;

function mathOperation (numOne, numTwo, numThree, numFour) {
    function checkNumbers(numOne, numTwo, numThree, numFour) {
        if (typeof numOne === "number"
            && typeof numTwo === "number"
            && typeof numThree === "number"
            && typeof numFour === "number") {
                return true;
            }
    };
    
    if (checkNumbers (numOne, numTwo, numThree, numFour)) {
        let result = (numOne + numTwo) * (numThree + numFour);
        if (result > 50) {
            console.log("¡El número es mayor que 50!")
        } else if (result === 50) {
            console.log("¡El número es 50!")
        }
        else {
            console.log("¡El número es inferior a 50!")
        };
    } else {
        console.log("Confirma que todos son números")
    }
};

mathOperation(numOne, numTwo, numThree, numFour);