import moment from "moment";
import _ from "lodash";
import inquirer from "inquirer";

const dinerBackbone = {
    commentsAboutFood: [
        "¡Excelente elección!",
        "Una opción deliciosa.",
        "Perfecto, te encantará.",
        "Muy sabroso.",
        "Te va a encantar.",
        "Un clásico del menú.",
        "¡Buena elección!",
        "¡Te chuparás los dedos!",
        "Una delicia inigualable.",
        "¡Increíble sabor!"
    ],
    menus: {
        desayuno: {
        entrees: {
            "Huevos Revueltos": 8,
            "Tostadas con Aguacate": 7,
            "Batido de Frutas": 5
            },
            sides: {
            "Yogur con Granola": 3,
            "Frutas Frescas": 4,
            "Café o Té": 2
            }
        },
        almuerzo: {
            entrees: {
            "Hamburguesa Clásica": 12,
            "Ensalada César": 10,
            "Sopa del Día": 8
            },
            sides: {
            "Patatas Fritas": 5,
            "Ensalada de Patatas": 6,
            "Vegetales Asados": 7
            }
        },
        cena: {
            entrees: {
            "Hamburguesa Clásica": 15,
            "Ensalada César": 13,
            "Sopa del Día": 11
            },
            sides: {
            "Patatas Fritas": 7,
            "Ensalada de Patatas": 8,
            "Vegetales Asados": 9
            }
        }
    },
};

const momentOfDay = function () {
    const hour = Number(moment().format("HH"));
    let menuType = "fuera del horario";

    if (7 <= hour && hour < 12) {
        menuType = "desayuno";
    } else if (12 <= hour && hour < 16) {
        menuType = "almuerzo";
    } else if (16 <= hour && hour <= 23) {
        menuType = "cena";
    };

    return menuType;
};


const menuType = momentOfDay();


async function camarero() {
    console.log(`\n Bienvenido al restaurante.\n`);

    const entreesObj = dinerBackbone.menus[menuType].entrees;
    const sidesObj = dinerBackbone.menus[menuType].sides;
    const commentsPoolArr = dinerBackbone.commentsAboutFood;
    
    const entreesPrice = await inquirer.prompt([
        {
        type:"list",
        name: 'entrees',
        message: `¿Qué le gustaría de plato principal? Este es el menú:`,
        choices: Object.keys(entreesObj),
        },
    ])
    .then(answers => {
        console.log(`${commentsPoolArr[_.random(0, commentsPoolArr.length)]}`);
        console.log(`El precio es ${entreesObj[answers.entrees]} €`);
        const entreesPrice = Number(`${entreesObj[answers.entrees]}`);
        return entreesPrice;
    });

    const sidesPrice = await inquirer.prompt([
        {
        type:"checkbox",
        name: 'sides',
        message: `¿Qué le gustaría de acompañamiento? Puede elegir dos productos. Elegir más de dos productos conlleva un sobrecoste de 3€. Este es el menú:`,
        choices: Object.keys(sidesObj),
        },
    ])
    .then(answers => {
        const answersArr = answers.sides;

        console.log(`${commentsPoolArr[_.random(0, commentsPoolArr.length)]}`);

        let sidesPrice = 0;
        answersArr.forEach(answer => {
            sidesPrice += sidesObj[answer];
        });

        if (answersArr.length > 2) {
            sidesPrice += 3;
        } 
        
        console.log(`El precio es ${sidesPrice} €`);
        return sidesPrice;
    });

    const totalPrice = entreesPrice + sidesPrice;
    console.log(`El precio total es ${totalPrice} €`);
}

const dinerRestaurante = function () {
    if (menuType === "fuera del horario") {
        console.log(`Está cerrado. El horario es de 07.00 a 00.00. Disculpe las molestias.`)
    } else {
        camarero();
    }
}

dinerRestaurante();


