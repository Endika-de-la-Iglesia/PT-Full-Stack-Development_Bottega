// var cadena = "Esto es un string";
// var numero = 23;
// var ejemploBooleano = true;
// var nulo = null;
// var indefinido;
// var simbolo = Symbol("Esto es una descripción del símbolo");
// var ejemploObjeto = {
//     llaveUno: "valor 1",
//     llaveDos: "valor 2",
// }
// var ejemploArray = [
//     cadena, 
//     numero, 
//     ejemploBooleano,
//     nulo,
//     indefinido,
//     simbolo,
//     ejemploObjeto,
// ]

// console.log(typeof cadena)
// console.log(typeof numero)
// console.log(typeof ejemploBooleano)
// console.log(typeof nulo)
// console.log(typeof indefinido)
// console.log(typeof simbolo)
// console.log(typeof ejemploArray)

// var ejemplo = "Este es mi string the ejemplo"

// console.log(ejemplo.length)
// console.log(ejemplo.charAt(0))
// console.log(ejemplo.concat(" y le añado esto"))
// console.log(ejemplo.includes(" y le añado esto"))
// console.log(ejemplo)

// var listaNombres = ["Manuel", "Paco", "Sara"];
// var edad = 20;
// var nombre = "Sara";

// if (edad < 18) {
//     console.log("Acceso denegado")
// } else if (listaNombres.includes(nombre)) {
//     console.log("Acceso denegado")
// } else {
//     console.log("Acceso permitido")
// };

// edad < 18 ? console.log("Acceso denegado") : console.log("Acceso permitido")

// edad >= 18 
// ? listaNombres.includes(nombre)
//     ? console.log("Acceso denegado") 
//     : console.log("Acceso permitido") 
// : console.log("Acceso denegado");

var cosaUno = "pañuelo";
var cosaDos = "otra cosa";

// function cajaMagica (cosa) {
//     if (cosa.toLowerCase() === "pañuelo") {
//         console.log("paloma")
//     } else {
//         console.log(cosa.toLowerCase())
//     }
// };

// const cajaMagica = function (cosa) {
//     if (cosa.toLowerCase() === "pañuelo") {
//         console.log("paloma")
//     } else {
//         console.log(cosa.toLowerCase())
//     }
// };

// const miBoton = document.getElementById("miBoton");

// mi.Boton.addEventListener("click", function() {
//     this.disabled = true;
// });

// cajaMagica(cosaUno);
// cajaMagica(cosaDos);

// const persona = {
//     nombre: "Endika",
//     mostrarNombre: function () {
//         console.log(this.nombre);
//     },
// }

// persona.mostrarNombre();

var numOne = 2;
var numTwo = 3;
var numThree = 4;
var numFour = 5;

// function mathOperation (numOne, numTwo, numThree, numFour) {
//     console.log(numOne);
//     console.log(numTwo);
//     console.log(numThree);
//     console.log(numFour);
// };

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
        let calculation = (numOne + numTwo) * (numThree + numFour);
        console.log(calculation)
    } else {
        console.log("Confirma que todos son números")
    }
};


mathOperation(numOne, numTwo, numThree, numFour);