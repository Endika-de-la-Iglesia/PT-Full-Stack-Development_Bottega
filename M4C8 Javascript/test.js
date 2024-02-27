// for loops

const listaCompra = {
    manzana: 3,
    pera: 1,
    plátano: 8,
    fresa: 20
};

const listaCompraKeys = Object.keys(listaCompra);

// for (let i = 0; i < listaCompraKeys.length; i++) {
//     var listaCompraKey = listaCompraKeys[i]
//     console.log(`${listaCompra[listaCompraKey]} ${listaCompraKey}/s`)
// }

// for (let listaCompraKeyIndex in listaCompraKeys) {
//     var listaCompraKey = listaCompraKeys[listaCompraKeyIndex];
//     console.log(`${listaCompra[listaCompraKey]} ${listaCompraKey}/s`)
// }

// listaCompraKeys.forEach(function (key) {
//     console.log(`${listaCompra[key]} ${key}/s`)
// })

// for (let key in listaCompra) {
//     console.log(`${listaCompra[key]} ${key}/s`)
// }

// let i = 0;

// while (i < listaCompraKeys.length) {
//         var listaCompraKey = listaCompraKeys[i];
//         console.log(`${listaCompra[listaCompraKey]} ${listaCompraKey}/s`);
//         i++;
// }

// let i = 0;

// do {
//     var listaCompraKey = listaCompraKeys[i];
//     console.log(`${listaCompra[listaCompraKey]} ${listaCompraKey}/s`);
//     i++;
// } while (i < listaCompraKeys.length);

// const myList = ["velma", "scout", "jane", "john", "harry"];

// for (let nombre in myList) {
//     console.log(nombre);
// };


// const saludoUno = function() {
//     return "Hello World, clásico";
// };

// console.log(saludoUno());

// const saludoDos = () => {
//     return "Hello World, flecha";
// };

// console.log(saludoDos());


// listaCompraKeys.forEach(function (key) {
//     console.log(`${listaCompra[key]} ${key}/s`)
// })

// listaCompraKeys.forEach(key => {
//     console.log(`${listaCompra[key]} ${key}/s`)
// })

// var variableUno = "Ejemplo externo 1";
// console.log(variableUno);
// var variableUno = "Ejemplo externo 2";
// console.log(variableUno);
// variableUno = "Ejemplo externo 3";
// console.log(variableUno);

// function ejemplo() {
//     var variableUno = "Ejemplo función";
//     console.log(variableUno);
// }

// ejemplo();
// console.log(variableUno);

// let variableLet = "Ejemplo 1";
// console.log(variableLet);
// variableLet = "Ejemplo 2";
// console.log(variableLet);

// function ejemplo() {
//     let variableLet = "Ejemplo función";
//     console.log(variableLet);
// }

// ejemplo();
// console.log(variableLet);

// const variableConst = "Ejemplo 1";
// console.log(variableConst);
// variableConst = "Ejemplo 2";
// console.log(variableConst);

// const numbers = [1, 2, 3];
// const [numUno, numDos, numTres] = numbers;
// console.log(`${numUno} : ${numDos} : ${numTres}`);

// const ejemplo = {
//     nombre: "Ejemplo",
//     edad: "No tiene edad",
// };

// const {nombre, edad} = ejemplo;
// console.log(`${nombre} : ${edad}`);

// const numbers = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersThree = [numbers, numbersTwo];
// console.log(numbersThree);
// const numbersFour = [...numbers, ...numbersTwo];
// console.log(numbersFour);

// const ejemploUno = {
//     llaveUno: "Valor 1",
//     llaveDos: "Valor 2",
// }

// const ejemploDos = {
//     llaveTres: "Valor 3",
//     ejemploUno,
// }

// console.log(ejemploDos);

// class Personaje {
//     constructor(nombre, raza) {
//         this._nombre = nombre;
//         this._raza = raza;
//     }

//     static juego = "D&D";
  
//     get nombre() {
//         return this._nombre;
//     }
  
//     get raza() {
//         return this._raza;
//     }
  
//     ataque() {
//         return "Ataque";
//     }

//     static saludar() {
//         return "Saludos, aventurero"
//     }
//   };

// const nuevoPersonaje = PONED AQUÍ EL CÓDIGO;
// console.log(`Me llamo ${nuevoPersonaje.nombre} y soy un ${PONED CÓDIGO}`);

// const ejemploPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promesa cumplida")
//       }, 3000);
    
//       setTimeout(() => {
//         reject(Error("Promesa no cumplida"))
//       }, 3000);
// });

// const repositoriosPromise = fetch("https://api.github.com/users/Endika-de-la-Iglesia/repos");

// repositoriosPromise
//     .then(datos => datos.json())
//     .then(datos => {
//         console.log(datos);
//         })
//     .catch(error => {
//         console.log(error);
//     })

const aportarNombre = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Endika")}
            , 6000);
    });
};

const imprimirNombre = (nombre) => {
    console.log(`Hola, ${nombre}`);
};

function saludo() {
    const nombrePromesa = aportarNombre();
    imprimirNombre(nombrePromesa);
};

saludo();




