Funciones y variables
=========================

La diferencia entre declarar una función y crear una expresión de función, con función anónima, ya se explicó en :ref:`javascript-funciones`.
En esta ocasión vamos a ver una tercera manera de crear una función y nombrarla.

Las funciones de flecha
------------------------

¿Qué demonios quiere decir que una función sea de flecha? Pues literalmente eso, que tiene una «flecha» para indicar el argumento o argumentos (o su ausencia con ``()``) que
se le pasan a una función. Este tipo de función es una variante de las expresiones de función, cambia la manera de escribirlo, y algunas implicaciones
adicionales. Veamos una expresión que no usa argumentos para llevar a cabo un efecto. Dado que nos han mandado como ejercicio escribir una función 
que nos devuelva ``Hello World``, vamos a hacer eso.

.. code-block:: javascript

    const saludoUno = function() {
        return "Hello World, clásico";
    };

    console.log(saludoUno());

.. code-block:: output

    Output 
    ------
    Hello World, clásico

Al invocar ``saludoUno()``, se devuelve un mensaje. Esto mismo con funciones de flecha es muy sencillo. Se quita ``function``
y se indica que es una función poniendo ``(argumentos) => {efecto función}``. 

.. code-block:: javascript

    const saludoDos = () => {
        return "Hello World, flecha";
    };

    console.log(saludoDos());

.. code-block:: output

    Output 
    ------
    Hello World, flecha

Hay que tener cuidado cuando se usa la palabra clave *this* en las funciones de flecha, ya que muchas veces hacen referencia 
a otros elementos diferentes de los que pensamos. Por eso, no es recomendable usar este tipo de funciones como métodos de clase, puesto 
que los *this* que usemos no harán referencia a la instancia que llame la función, sino al entorno original en el que se
crearon las funciones de flecha. 

Cuando pasamos funciones dentro de funciones, es mucho más cómodo usar funciones de flecha como argumentos, por
ejemplo:

.. code-block:: javascript

    listaCompraKeys.forEach(function (key) {
        console.log(`${listaCompra[key]} ${key}/s`)
    })

    listaCompraKeys.forEach(key => {
        console.log(`${listaCompra[key]} ${key}/s`)
    })

Ambos ejemplos son lo mismo, pero el segundo es visualmente más claro.

Declaración de variables: var, let y const
-----------------------------------------

Para poder asignar un valor a una variables, es decir, inicializarla, es necesario declararla. ``var variable``, ``let variable`` y ``const variable`` permiten hacerlo, aunque con diferencias.
Una variable declarada con *var* puede ser redeclarada y reasignada un valor. La declaración con *var* tiene alcance de función, si se declara dentro de una función, el ámbito global externo no la verá.

.. code-block:: javascript

    var variableUno = "Ejemplo externo 1";
    console.log(variableUno);
    var variableUno = "Ejemplo externo 2";
    console.log(variableUno);
    variableUno = "Ejemplo externo 3";
    console.log(variableUno);

    function ejemplo() {
        var variableUno = "Ejemplo función";
        console.log(variableUno);
    }

    ejemplo();
    console.log(variableUno);

.. code-block:: output

    Output 
    ------
    Ejemplo externo 1
    Ejemplo externo 2
    Ejemplo externo 3
    Ejemplo función
    Ejemplo externo 3

La variableUno de dentro de la función ejemplo no es vista por el entorno externo. En el entorno externo podéis ver
cómo he redeclarado la función y he reasignado valores. Esto podría causar errores graves en programas grandes en los que,
tal vez, ya hemos declarado una función con un nombre determinado. Por eso están *let* y *const*, ambos sólo pueden ser declarados 
una vez con un determinado nombre, evitando redeclaraciones, pero *let* permite cambiar el valor interno de esa variable.
Las variables declaradas con *let* y *const* sólo son visibles dentro de su ámbito, en su caso en bloques separados por ``{}``.

.. code-block:: javascript

    let variableLet = "Ejemplo 1";
    console.log(variableLet);
    variableLet = "Ejemplo 2";
    console.log(variableLet);
    let variableLet = "Ejemplo 3";
    console.log(variableLet);

.. code-block:: output

    Output 
    ------
    SyntaxError: Identifier 'variableLet' has already been declared

La reasignación de valor no ha dado error, pero su redeclaración con ``let variableLet`` nos da el error
o advertencia de que una variable con ese nombre ya ha sido declarada en ese ámbito. La declaración con *const* lo
lleva un paso más allá y no permite ni reasignar un valor a una variable.

.. code-block:: javascript

    const variableConst = "Ejemplo 1";
    console.log(variableConst);
    variableConst = "Ejemplo 2";
    console.log(variableConst);

.. code-block:: output

    Output 
    ------
    TypeError: Assignment to constant variable.

Es recomendable usar *let* cuando queramos iterar y reasignar valores. Cuando queramos que un valor no cambie y sea constante,
utilizaremos *const*.

Deconstrucción de variable y operador *spread*
------------------------------

Consiste, literalmente, en descomponer *arrays* y objetos en sus elementos internos y asignarlos como valor de una variable. Si tengo un *array* con tres números
tal que así:

.. code-block:: javascript

    const numbers = [1, 2, 3];

Puedo descomponerlo poniendo ``[]``, porque es un *array*, y dentro de los corchetes los nombres que quiero que tengan las variables
en las que se va a descomponer ese *array*.

.. code-block:: javascript

    const [numUno, numDos, numTres] = numbers;

Ahora tenemos tres variables, llamadas ``numUno``, ``numDos`` y ``numTres``, albergando cada una
uno de los valores. Lo mismo se puede hacer con las propiedades de un objeto, aunque en ese caso debemos usar ``{}`` y el
mismo nombre de variable que la llave usada para el valor que queramos (los objetos no se deconstruyen ordenados por índices, sino por palabras clave-llave).

.. code-block:: javascript

    const ejemplo = {
    nombre: "Ejemplo",
    edad: "No tiene edad",
    };

    const {nombre, edad} = ejemplo;

Así capturamos esos valores dentro de variables. Tanto para *arrays* como para objetos, existe un operador llamado *spread* (extender), activado con ``...`` delante
del elemento que queramos deconstruir, que permite hacer algo parecido a lo visto anteriormente. Supongamos que tenemos dos *arrays*:

.. code-block:: javascript

    const numbers = [1, 2, 3];
    const numbersTwo = [4, 5, 6];

Queremos juntarlos en uno, pero si hacemos esto:

.. code-block:: javascript
    
    const numbersThree = [numbers, numbersTwo];
    console.log(numbersThree);

.. code-block:: output

    Output 
    ------
    [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

Vemos que hemos ocasionado que un *array* haya anidado dentro de otro. Sin embargo, nosotros queríamos un único *array* con los valores individuales de ambos *arrays*.
Usemos ``...`` para deconstruirlo:

.. code-block:: javascript

    const numbersFour = [...numbers, ...numbersTwo];
    console.log(numbersFour);

.. code-block:: output

    Output 
    ------
    [ 1, 2, 3, 4, 5, 6 ]

Lo mismo se podría hacer con objetos. De hecho, vosotros vais a hacerlo. Aquí tenéis un ejemplo inacabado, intentad que ``ejemploDos`` tenga una copia de las propiedades de ``ejemploUno``
dentro, pero que no esté anidado el ``ejemploUno`` en el ``ejemploDos``.

.. raw:: html
    
    <div class="livecodes" style="height: 300px;" data-options='{"appUrl":"https://v24.livecodes.io/","config":{"activeEditor":"script","tools":{"enabled":"all","status":"full","active":"console"}},"loading":"eager"}'>
    <pre data-lang="html"></pre>
    <pre data-lang="css"></pre>
    <pre data-lang="javascript">const ejemploUno = {
        llaveUno: &#34;Valor 1&#34;,
        llaveDos: &#34;Valor 2&#34;,
    }

    const ejemploDos = {
        llaveTres: &#34;Valor 3&#34;,
        ejemploUno,
    }

    console.log(ejemploDos);
    </pre>
    </div>
    <script defer src="https://unpkg.com/livecodes@0.4.0/livecodes.umd.js" data-prefill></script>

