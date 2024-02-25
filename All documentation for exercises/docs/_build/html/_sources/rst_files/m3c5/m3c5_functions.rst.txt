Funciones
=====

En este apartado debo explicar lo que son los argumentos y la función *lambda*, pero eso no se puede hacer sin decir que es una función.

Función con def() y argumentos
------------

Una función es un proceso que es capaz de coger un input (o no) y hacer algo con ello, normalmente transformándolo en un output. Es como un cajón mágico
en el que metes un pañuelo y te sale una paloma. ¡Contruyamos ese cajón mágico!

.. code-block:: python

    def magic_box(objeto):
        if objeto.lower() == "pañuelo":
            print("paloma")
        else:
            print(objeto)

    magic_box("pañuelo")


.. code-block:: output
    
    Output
    ------
    paloma

Hemos definido una función llamada «magic_box» y le hemos pasado un valor (objeto). Si ese valor es un pañuelo, lo transforma en paloma, si no, nos devuelve el objeto.
Cuando llamamos por su nombre y ejecutamos la función, le metemos el valor del objeto. Ese valor es el argumento de la función. En este sencillo caso, sólo pasamos
un valor (un argumento), pero podrían pasarse más. Si tenemos muchos argumentos, podemos usar args y desempaquetar varios valores a la vez (en orden) o kwargs que es lo mismo, 
pero llamando a cada elemento de los argumentos por una palabra clave (*keyword* del inglés). El ejemplo de la caja mágica con múltiples objetos sería:

.. code-block:: python

    def magic_box(*args):

        for arg in args:
            if arg.lower() == "pañuelo":
                print("paloma")
            else:
                print(arg)

    magic_box("bola", "llavero", "pañuelo", "mechero")

.. code-block:: output
    
    Output
    ------
    bola
    llavero
    paloma
    mechero

Todo buen mago que se precie elige a una persona del público para ayudarle con el truco y siempre le hace alguna pregunta. En este caso, le pregunta el nombre, la edad y si
le gustan o no las palomas (esperemos que sí, no queremos ningún disgusto). Esas respuestas se las apunta como *keywords* para poder hablar sobre su ayudante.

.. code-block:: python

    def magic_box(*args, **kwargs):

        print(f"Saludemos a {kwargs['nombre']} que tiene {kwargs['edad']} años y {kwargs['palomas']} le gustan las palomas")

        for arg in args:
            if arg.lower() == "pañuelo":
                print("paloma")
            else:
                print(arg)

    magic_box("bola", "llavero", "pañuelo", "mechero",
            nombre = "Sara", edad= 13, palomas = "sí" )

.. code-block:: output
    
    Output
    ------
    Saludemos a Sara que tiene 13 años y sí le gustan las palomas
    bola
    llavero
    paloma
    mechero

Función lambda
-------------

La función *lambda* es una función anónima, no tiene nombre. Al no tener nombre no podemos llamarla varias veces en diferentes puntos del código, como sí que se puede
hacer con las funciones con nombre (creadas con «def»). Sin embargo, podemos guardarla en una variable y entonces sí que podemos usarla donde nos plaza. La función lambda es recomendable
sólo con funciones sencillas. Volviendo a la caja mágica, si en lugar de una caja, tenemos al mago haciendo el truco sobre la marcha
de manera rápida, pero eficiente, podríamos usar una función *lambda*:

.. code-block:: python

    mago = lambda objeto: "paloma" if objeto == "pañuelo" else objeto

    print(mago("pañuelo"))


.. code-block:: output
    
    Output
    ------
    paloma

Como podéis ver le damos un objeto (argumento) al mago y «al vuelo» lo transforma (ejecuta lo que viene después de «:») en paloma, si es un pañuelo. Espero que con este apartado haya quedado
clara la magia de las funciones de Python.

*pip* y los paquetes de Python
---------------------

A pesar de que el título de este apartado parece el de una comedia navideña, es muy importante. De hecho, ¿que me diríais si os comentara que muchas de las funciones
en las que penséis, y muchas más, ya existen y están accesibles gracias a programadores muy simpáticos? Me preguntaríais cómo conseguirlas. Es muy sencillo, la gente crea 
bibliotecas que agrupan módulos que tienen funciones en su interior. Como esas funciones tienen nombres, y sus módulos y bibliotecas también, sólo hace falta llamarlas.
El problema está en que esas bibliotecas se distribuyen en paquetes que tenemos que instalar. Para eso tenemos a **pip**, el instalador de paquetes de Python, sería una especie de asistente, ayudándonos
en el proceso.

Si se está usando Python 3, lo más normal es tener instalado **pip**, si no, lo instalamos siguiendo estas instrucciones: https://pip.pypa.io/en/stable/installation/.


Para usarlo, escribimos el siguiente código en la terminal de comandos de nuestro sistema operativo:

.. code-block:: command

    $ pip install paquete_que_queramos

Para actualizar paquetes:

.. code-block:: command

    $ pip install --upgrade paquete_que_queramos

Y para desinstalar:

.. code-block:: command

    $ pip uninstall paquete_que_no_queramos

De esta manera, tendremos acceso a un mundo de posibilidades.

