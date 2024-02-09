Comprensión de listas
=====

Las listas son unos objetos muy útiles en Python para almacenar otros elementos. Podemos escribir las listas directamente o podemos
recurrir a una sintaxis sencilla si la queremos generar a partir de elementos iterables (si no sabes lo que es un elemento iterable,
mira la sección de bucles de esta documentación). Si alguien te pide que hagas la lista del 1 al
20, una opción, muy cansada y poco acertada, sería escribirlo directamente. Aquí está (me sacrifico por el equipo):

.. code-block:: python

    lista_num = ["1", "2", "3", "4"]

He parado, me estaba empezando a dar el síndrome del túnel carpiano. Vamos a crear la lista con ayuda de un bucle *for*.

.. code-block:: python

    lista_num = []

    for num in range(1, 21):
        lista_num.append(num)
    print(lista_num)

.. code-block:: output
    
    Output
    ------
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

Hemos creado una lista vacía y hemos iterado del 1 al 20 (recordad que el 21 marca el último número del rango, pero se excluye) agregando cada número
a la lista. Siguen siendo muchas líneas de texto, esto es código en Python, no la Biblia Parte 2. Para reducir todo a una línea podemos usar la comprensión
de listas.

Compresión de lista con *for*
------------

Veamos como es la sintaxis para generar la lista en una línea. 

.. code-block:: python

    lista_num = [num for num in range(1 ,21)]
    print(lista_num)

.. code-block:: output
    
    Output
    ------
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

Ponemos [] para generar la lista y dentro escribimos aquello que queremos que esté en la lista (num, lo que está dentro del bucle) seguido del bucle. Pero no sólo podemos usar bucles *for*
en la comprensión de listas, también podemos añadir condicionales tras el bucle mediante el uso de *if*.

Compresión de lista con *for* e *if*
------------

Si en el ejemplo anterior quisieramos iterar por los veinte primeros números, pero únicamente añadir los múltiplos de 3 a la lista, podríamos usar el operador módulo *%* para ver 
aquellos números que al ser divididos por 3 dan un resto de 0. 

Ejemplo con bucles y condicionales anidados:

.. code-block:: python

    lista_num = []

    for num in range(1, 21):
        if num % 3 == 0:
            lista_num.append(num)
    print(lista_num)

.. code-block:: output
    
    Output
    ------
    [3, 6, 9, 12, 15, 18]

Lo mismo pero recurriendo a comprensión de listas:

.. code-block:: python

    lista_num = [num for num in range(1 ,21) if num % 3 == 0]
    print(lista_num)

.. code-block:: output
    
    Output
    ------
    [3, 6, 9, 12, 15, 18]

Esto se podría complicar aún más usando *else* o varios condicionales a la vez para poblar nuestra lista. Como habéis podido ver, el uso de comprensión de listas permite generarlas
recurriendo a iteraciones y condicionales usando sólo una línea de código. En casos más complejos, con muchos condicionales y opciones, sería más claro, desde el punto de vista
del que lea el código, usar bucles y condicionales anidados.