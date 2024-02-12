Condicionales
=====

El primer punto a tratar sobre Python son los condicionales. Pero ¿qué es un condicional
en nuestro lenguaje? Podríamos definir un condicional de la siguiente manera:

Si «primera parte, condición», ocurre «segunda parte, consecuencia».

Por ejemplo: Si «llueve», «me mojaré». Me mojaré si se cumple la primera condición, en este caso,
que llueva. 

Si sabéis hablar vuestro idioma, no tendreís problema con los condicionales en Python (vaya maestría, usar condicionales
para explicar condicionales xD); son iguales. Para comenzar a escribir tus propios condicionales en Python sólo necesitáis una
palabra, *if* (si en inglés).

if
------------

Con el *if* queremos preguntar si una condición se cumple y, en caso de cumplirse, ocurrirá algo, se ejecutará el código dentro de ese 
condicional. Todo se entiende mejor con un ejemplo, así que supongamos que queremos hacer una aplicación para un casino online,
de tal manera que solo os deje «entrar» si sois mayores de edad. Ser mayor de edad, en España, significa tener 18 o más años. Entonces,
queremos que el programa nos diga que tenemos permiso si tenemos 18 o más años. 

.. code-block:: python

    edad = 19

    if edad >= 18:
        print("Acceso permitido")

.. code-block:: output
    
    Output
    ------
    Acceso permitido

Parece que funciona a la perfección y que sabe que alguien de 19 años puede entrar. Sin embargo, tenemos un pequeño problema,
¿qué ocurre con los que tienen menos de 18 años?

.. code-block:: python

    edad = 17

    if edad >= 18:
        print("Acceso permitido")

.. code-block:: output
    
    Output
    ------
            

No ocurre nada, ni imprime un resultado ni devuelve un valor. Eso pasa porque no le hemos dicho qué hacer cuando la gente sea 
menor de edad. Para solucionar este problema tenemos dos opciones.

else
------------

Cuando he descrito un condicional por primera vez, he mencionado que si se cumple, ocurre algo. Pero ¿si no ocurre?
«Si no» o «en cualquier otro caso» se repesentan con *else* en Python. Volviendo al ejemplo del casino, si tenemos 18 
o más años somos mayores de edad y tenemos acceso, si no tenemos esa edad, somos menores y no podemos entrar. Ahí, usamos
el *else*, para capturar todo lo que nuestro condicional no pilla, en este caso, si la edad no es de 18 años o más, tiene
que tener sí o sí un número entre 0 y 17 (incluido). El término *else* se encargará de ello.

.. code-block:: python

    edad = 17

    if edad >= 18:
        print("Acceso permitido")
    else:
        print("Acceso denegado")

.. code-block:: output
    
    Output
    ------
    Acceso denegado

¡Listo! Aunque hay otra manera de hacerlo. Todo el que me conoce sabe que soy un poco enrevesado (alerta por eufemismo), y, como no 
podría ser de otra manera, puedo complicar algo tan sencillo como lo anterior. Para esa titánica tarea, de hacer difícil lo fácil de este código, ignorando las recomendaciones
de escritura de Python, usaremos el término *elif*.

elif
------------

Si *if* y *else* tuvieran un hijo, seguro que se llamaría *elif*. El término *elif* se usa cuando aparte del *if* queremos otro condicional, pero no queremos ser tan
tajantes como cuando usamos *else*. En este caso no queremos sólo englobar todo lo que no es cubierto por *if*, sino que queremos poner una segunda condición. Retornando 
a nuestro casino online, podríamos haber escrito este código para denegar el acceso a los menores, en lugar del *else*.

.. code-block:: python

    edad = 17

    if edad >= 18:
        print("Acceso permitido")
    elif edad < 18:
        print("Acceso denegado")

.. code-block:: output
    
    Output
    ------
    Acceso denegado

Cuando me dijeron «no sé cómo puedes complicar algo tan fácil», tenían razón. Con *else* ya capturábamos todo lo que era inferior a 18 años. Entonces, ¿cuándo puede ser útil
el *elif*? Usar *elif* es útil cuando tenemos múltiples opciones o ramificaciones de decisión. En el caso de nuestro casino online, imaginemos que varios usuarios, cuyos nombres 
están en una lista, se han autoprohibido la entrada para evitar caer en la ludopatía. Aparte de la edad, ahora, tenemos en cuenta el nombre del usuario.

.. code-block:: python

    lista_nombres = ["Manuel", "Paco", "Sara"]
    edad = 25
    nombre = "Paco"

    if edad < 18:
        print("Acceso denegado")
    elif nombre in lista_nombres:
        print("Acceso denegado")
    else:
        print("Acceso permitido")

.. code-block:: output
    
    Output
    ------
    Acceso denegado

Si bien es cierto que Paco no es detectado por el primer *if* al ser mayor de 18, su nombre está en la lista de autoprohibición, así que se le deniega el acceso.
Si el cliente es mayor o igual a 18 y no está en la lista, será tratado como *else* y conseguirá acceso a la app. Podríamos poner un poco más bonito el código reduciendo
el número de líneas. Para ello, podemos recurrir a las declaraciones compuestas.

Declaraciones compuestas
------------

Hasta ahora hemos declarado las condiciones con una única declaración o requisito. No obstante, podemos usar operadores lógicos como *and* (conjunción copulativa «y») u
*or* (conjunción coordinante disyuntiva «o») para poner varios requisitos simultáneamente.

.. code-block:: python

    lista_nombres = ["Manuel", "Paco", "Sara"]
    edad = 25
    nombre = "Paco"

    if edad < 18 or (nombre in lista_nombres):
        print("Acceso denegado")
    else:
        print("Acceso permitido")

.. code-block:: output
    
    Output
    ------
    Acceso denegado

¡Mucho más limpio! Eso mismo con *and* sería lo siguiente:

.. code-block:: python

    lista_nombres = ["Manuel", "Paco", "Sara"]
    edad = 25
    nombre = "Paco"

    if edad >= 18 and (nombre not in lista_nombres):
        print("Acceso permitido")
    else:
        print("Acceso denegado")


.. code-block:: output
    
    Output
    ------
    Acceso denegado

Que no Paco, que no vas a entrar por mucho que lo intentes. Aquí podéis ver cómo al usar *and* (y *not in*) hemos puestos dos requisitos
para entrar, tener 18 años o más y, al mismo tiempo, no ser ninguna de las tres personas en la lista. Todo el resto de la gente, esto es, los menores de 18
o las tres personas con prohibición, tendrán denegado el acceso. Hay gente que prefiere una condición por línea y así poder entender la elección del programa
línea por línea. Para esto, podemos usar condicionales anidadas.

Condicionales anidadas
------------

Anidar en Python es lo mismo que tener unas muñecas matrioskas, unas dentro de otras. En Python se puede anidar casi cualquier elemento, y, por supuesto,
las declaraciones condicionales se pueden anidar. Voy a mostrar el código anterior, pero en lugar de usar *and*, voy a usar condicionales anidadas.

.. code-block:: python

    lista_nombres = ["Manuel", "Paco", "Sara"]
    edad = 25
    nombre = "Paco"

    if edad >= 18:
        if nombre not in lista_nombres:
            print("Acceso permitido")
        else:
            print("Acceso denegado")
    else:
        print("Acceso denegado")


.. code-block:: output
    
    Output
    ------
    Acceso denegado

Son más líneas de código que el ejemplo anterior, lo que se consideraría poco pythónico, pero el objetivo es mostrar la sintáxis y el razonamiento. Primero se mira la edad
y, después, si el nombre está en la lista. Esto último sólo ocurre si el cliente «entra» en el primer condicional de la edad, si no, es que es menor, así que nos
da igual su nombre. Anidar condicionales es útil cuando queremos segregar nuestros datos por diferentes criterios y alguno de ellos depende del otro. De esta manera,
se ponen diferentes puntos de corte y sólo se ejecutan algunas condicionales si se ha pasado el primer umbral.

Expresiones ternarias condicionales
------------

¿Qué hay más bonito en la vida que las cosas sencillas? Nada, y los creadores de Python lo saben. Cuando tenemos condiciones sencillas, como la primera:

.. code-block:: python

    edad = 17

    if edad >= 18:
        print("Acceso permitido")
    else:
        print("Acceso denegado")

Condiciones «esto o lo otro», de todo o nada, de dos opciones..., podemos usar las expresiones ternarias que son muy similares a nuestro lenguaje hablado y escrito.
Entras si tienes 18 años o más, si no, no entras.

.. code-block:: python

    edad = 17

    print("Acceso permitido") if edad >= 18 else print("Acceso denegado")

.. code-block:: output
    
    Output
    ------
    Acceso denegado

Esta segunda manera es más clara y legible, si traduces lo que pone del inglés al castellano tendrás: «Acceso permitido si tu edad es mayor o igual a
18 si no acceso denegado.
