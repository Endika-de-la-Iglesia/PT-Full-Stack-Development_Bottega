Promesas y asincronía
===========================

En esta sección se tratarán dos temas muy importantes de JS, relacionadas de manera directa con el correcto funcionamiento
de procesos en aplicaciones web. Todo lo que se explicará es posible al ser JS un lenguaje que se ejecuta de manera asíncrona, no
es necesario que los procesos anteriores de un *script* se hayan completado para que otro código puede también ser ejecutado.
Las operaciones no bloquean la ejecución del programa completo. Básicamente, JS permite que múltiples tareas se realicen de forma 
simultánea sin bloquear la ejecución principal. Esto es muy útil en situaciones en las que hay operaciones que pueden llevar tiempo, como, por ejemplo, lectura
de archivos, solicitudes a servidores o interacciones con bases de datos y APIs. 

Promesas
--------------

Las promesas en JS implican que el código espera recibir algún tipo de dato sobre el que ejecutar funciones. Se le hace la promesa
de recibir los datos, en caso de recibirlos, se resuelve la promesa (*resolve*), si no se reciben, la promesa es rechazada (*reject*).

.. code-block:: javascript

    const ejemploPromesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa cumplida")
        }, 3000);
        
        setTimeout(() => {
            reject(new Error("Promesa no cumplida"))
        }, 3000);
    });

En este código tenemos la promesa de retornar un mensaje u otro en caso de cumplirse la promesa tras una espera (``setTimeout()``)
de 3 segundos (3000 por ser en milisegundos). En este caso siempre se cumplirá la promesa, no obstante, si cambiáramos el código para 
recabar información web (usaremos ``fetch()``, que es un método basado en la generación de una promesa), sí que podría salir mal la promesa. Además, usaremos el método ``then`` para
hacer algo si se cumple la promesa y ``catch`` para pillar el fallo si no se cumple.

.. code-block:: javascript

    const repositoriosPromise = fetch("https://api.github.com/users/Endika-de-la-Iglesia/repos");

    repositoriosPromise
        .then(datos => datos.json())
        .then(datos => {
            console.log(datos);
            })
        .catch(error => {
            console.log(error);
        })

Capturamos los datos recibidos desde la URL, los transformamos a json y los imprimimos. Si se diera el caso de haber un error,
gracias a ``catch`` podríamos capturarlo e imprimirlo.

Asincronía: *await* y *async*
--------------------------------

Los términos *async* y *await* son utilizados para gestionar promesas de manera asíncrona. Muchas veces tendremos promesas que capturarán 
datos cuando se resuelvan y usarán esos datos para resolver otras promesas, vamos, que tendremos funciones esperando a que se les proporcionen
unos elementos sin los que no pueden trabajar. Con *async* se declaran funciones y, dentro de esas funciones, se puede usar *await*
para esperar a que una promesa se cumpla. Las funciones asíncronas son pacientes con las promesas, y son ordenadas. Hasta que no se resuelve una promesa,
no salta la siguiente, esto obviamente ocurre si las promesas están dentro de la misma función asíncrona.

El ejemplo que voy a mostrar es un caso en el que un usuario aporta un nombre y el programa lo imprime. El problema es que el programa tarda
6 segundos en recibir la información sobre el nombre e imprimirla es instantáneo. Si ambos procesos empezaran a la vez, de manera asíncrona, tendríamos
que antes de dar el nombre ya estaría impreso, lo cual es imposible. 

.. code-block:: javascript

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

.. code-block:: output

    Output 
    ------
    Hola, [object Promise]

Como la ejecución del código de impresión no espera a que se devuelva el nombre, lo que se imprime es el objeto de la promesa, que
está pendiente de ser cumplida. Si usáramos ``async`` y ``await`` podríamos librarnos de eso.

.. code-block:: javascript

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

    async function saludo() {
        const nombrePromesa = await aportarNombre();
        imprimirNombre(nombrePromesa);
    };

    saludo();

.. code-block:: output

    Output 
    ------
    Hola, Endika

En este ejemplo, el *await* hace que ``imprimirNombre`` se ejecute sólo cuando la promesa de ``aportarNombre()`` se cumpla.
Cuando la promesa se cumple, se devuelve el valor del nombre, que es capturado correctamente por la variable ``nombrePromesa``.
Ese nombre se usa como argumento de la función de impresión.