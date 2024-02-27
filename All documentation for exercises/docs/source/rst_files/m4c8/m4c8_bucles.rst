Bucles
=======================

Los bucles son líneas de código que nos permiten iterar un determinado número de veces sobre unos datos. Como su propio nombre indica, entramos en 
un bucle que repite una acción hasta que se cumple una condición. En una documentación anterior se encuentran explicados los bucles, con todo lujo de detalles,
para :doc:`Python <../m3c5/m3c5_bucles>`. En esta ocasión se explicará la sintaxis específica de JS para iterar sobre objetos. 
En la sección de Python se muestra cómo tener una lista de la compra en forma de diccionario, en esta ocasión, lo más similar a un diccionario en JS
son los objetos con pares de llave-valor. 

.. code-block:: javascript

    const listaCompra = {
        manzana: 3,
        pera: 1,
        plátano: 8,
        fresa: 20
    }

for
--------------

Podríamos imprimir cada pareja por su lado, pero queremos automatizar la iteración, de tal manera que con sólo imprimir una vez un elemento podamos
repetir la acción tantas veces como «propiedades» (llaves o elementos) tengamos, en este caso cuatro veces. La sintaxis usando ``for`` es poner después de
esa palabra clave ``(contador; condición a cumplir; contador + 1) {acción a iterar}``. Como contador se usa ``i``, que hay que declararlo (usando ``let``, ya se explicará
más adelante ese término) y asignarle un valor
de 0 para que empiece desde el principio ``let i = 0``. La condición a cumplir suele ser ``i < número de veces que queramos iterar``, no se pone menor
igual porque empezamos desde 0, no desde 1. Para poner contador + 1 se escribe con la notación ``i++``, consiguiendo que en cada ciclo aumente uno el contador.
Veamos cómo imprimir mi lista de la compra de la frutería.

.. code-block:: javascript

    const listaCompraKeys = Object.keys(listaCompra);

    for (let i = 0; i < listaCompraKeys.length; i++) {
        var listaCompraKey = listaCompraKeys[i];
        console.log(`${listaCompra[listaCompraKey]} ${listaCompraKey}(s)`);
    };

.. code-block:: output

    Output 
    ------
    3 manzana(s)
    1 pera(s)
    8 plátano(s)
    20 fresa(s)

Para poder iterar sobre un objeto en JS, es necesario obtener un *array* con las llaves mediante ``Object.keys()`` y 
determinar su longitud con ``length``. Después, accedemos en cada iteración a una llave mediante el índice ``i`` sobre 
el *array* (``array[índiceActual]``). Finalmente, obtenemos el valor de la llave ``objeto[llave]``. Aquí podéis ver un caso
de interpolación (sustitución dinámica de texto) en JS, ponemos ``(`${variable u objeto}`)`` para conseguir
ese efecto. 

Esta no es la única manera de usar un bucle *for*, también podemos escribir:

.. code-block:: javascript

    for (let listaCompraKeyIndex in listaCompraKeys) {
        var listaCompraKey = listaCompraKeys[listaCompraKeyIndex];
        console.log(`${listaCompra[listaCompraKey]} ${listaCompraKey}(s)`)
    }

Es exactamente lo mismo. Con objetos podemos usar este bucle de manera mucho más sencilla, en lugar de 
generar un *array* con las llaves (propiedades) del objeto, podemos iterar sobre las llaves mismas al no haber
índices en un objeto. Con ``for (let i = 0; ...)`` no se puede hacer, pero, con este segundo método de ``índice en array``, podemos
hacer ``llave en objeto``.

.. code-block:: javascript

    for (let key in listaCompra) {
        console.log(`${listaCompra[key]} ${key}(s)`)
    }

Todas estas opciones son idénticas. Esta última sería la mejor por claridad de lo que se hace. En los dos primeros ejemplos
iterábamos sobre los índices del *array*, mientras que aquí iteramos sobre los elementos. Por eso,
nos ahorramos tener que poner ``var key = listaCompraKeys[índice]``, porque iteramos sobre las llaves
directamente. 

Cuando trabajemos con objetos y con *arrays* podemos usar
el método ``forEach``, que nos permite hacer algo parecido.

.. code-block:: javascript

    listaCompraKeys.forEach(function (key) {
        console.log(`${listaCompra[key]} ${key}(s)`)
    })

Podemos apreciar que con ``forEach`` la sintaxis se basa en meter dentro de un método una expresión de función que acepta como argumento
la llave actual sobre la que se está iterando. Ese argumento es usado dentro de esta función anónima para llevar a cabo un efecto.

while
----------------------

En vez de utilizar *for*, podemos usar *while*, que permite hacer lo mismo con una sintaxis diferente.

.. code-block:: javascript

    let i = 0;

    while (i < listaCompraKeys.length) {
            var listaCompraKey = listaCompraKeys[i];
            console.log(`${listaCompra[listaCompraKey]} ${listaCompraKey}(s)`);
            i++;
    }

Nótese que es idéntico a nuestro primer bucle *for*, pero declaramos e iniciamos el contador i fuera del bucle, ponemos entre paréntesis nuestra condición y 
añadimos 1 al contador al acabar la tarea del bucle. Existe otro tipo de bucle con *while*, llamado *do while*, que es muy parecido, aunque tiene la ventaja de garantizar
que al menos se realizará una vez por tener la condición al final del bucle. 

.. code-block:: javascript

    let i = 0;

    do {
        var listaCompraKey = listaCompraKeys[i];
        console.log(`${listaCompra[listaCompraKey]} ${listaCompraKey}(s)`);
        i++;
    } while (i < listaCompraKeys.length);

Si le metiéramos un *array* vacío (``listaCompraKeys.length === 0``), daría un error, ya que intentaría ejecutarse sí o sí, al tener al final la condición. En los otros casos,
como la condición está antes del bloque, detectaría que ``0 === 0`` y no se ejecutaría ni una vez, evitando un error. A veces, nos interesa correr un código al menos una vez
y, después, iterar en función de una condición, en esos casos, sería útil.

Ejercicio propuesto
--------------------------

Nos han propuesto dos ejercicios basados en bucles. Cree un bucle for en JS que imprima cada nombre de esta lista: 

``myList = ["velma", "scout", "jane", "john", "harry"]``

Cree un bucle while que recorra la misma lista e imprima también los nombres.

Bien, nos piden que creemos un bucle para ``console.log(elemento)`` de la lista. La lógica sería iterar tantas veces como elementos hay en la lista.
Usando las explicaciones previas, debemos iterar por los índices del *array*, desde 0 hasta la longitud de la lista (menor que la longitud, porque no queremos iterar hasta ese
número, sino hasta el anterior) e imprimir los elementos ``myList[índice]``:

.. code-block:: javascript

    const myList = ["velma", "scout", "jane", "john", "harry"];

    for (let i = 0; i < myList.length; i++) {
        console.log(myList[i]);
    };

.. code-block:: output

    Output 
    ------
    velma
    scout
    jane
    john
    harry

¡Conseguido! Ahora habría que cambiar la sintaxis a la de *while*. Recordemos, primero declaramos e inicializamos
``i``, después, tras *while*, ponemos la condición, y, por último, antes de acabar el ciclo ``i++`` sumamos una al contador.

.. code-block:: javascript

    let i = 0;

    while (i < myList.length) {
        console.log(myList[i]);
        i++;
    };


Consola de pruebas
----------------------

Normalmente, cuando más se aprende es cuando se puede trastear con el código. Os propongo un reto, corregir
el código proporcionado en la consola inferior para lograr imprimir los cinco nombres de la lista. Esa es otra manera de 
usar un bucle *for* para solucionar el ejercicio anterior. El objetivo es que al correr el código, en la consola, aparezcan los cinco
nombres como *output*.

.. raw:: html

    <div class="livecodes" style="height: 300px;" data-options='{"appUrl":"https://v24.livecodes.io/","config":{"activeEditor":"script","tools":{"enabled":"all","status":"full","active":"console"}},"loading":"eager"}'>
    <pre data-lang="html"></pre>
    <pre data-lang="css"></pre>
    <pre data-lang="javascript">const myList = [&#34;velma&#34;, &#34;scout&#34;, &#34;jane&#34;, &#34;john&#34;, &#34;harry&#34;];

    for (let nombre in myList) {
        console.log(nombre);
    };</pre>
    </div>
    <script defer src="https://unpkg.com/livecodes@0.4.0/livecodes.umd.js" data-prefill></script>


