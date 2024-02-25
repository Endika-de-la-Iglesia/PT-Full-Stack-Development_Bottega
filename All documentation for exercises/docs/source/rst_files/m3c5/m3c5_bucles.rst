Bucles
=========

Vamos a explorar el mundo de los bucles en Python. Pero ¿qué es un bucle? Un bucle es un suceso que se reitera en el tiempo. Se utiliza el término
iterar cuando nos referimos a que una acción se repite «x» veces. Esa repetición se basa en un parámetro, o condición, que llevará la cuenta del número de veces
que queramos ejecutar la citada acción.

Si queremos generar la hoja del calendario de un mes, podríamos imprimir cada número, cada día, de manera iterativa hasta llegar al número máximo de 
días de ese mes.

No nos gusta ser repetitivos, tener que hacer lo mismo una y otra vez puede ser agotador.
El mundo de la programación nos permite repetir acciones sin necesidad de ir elemento por elemento de manera manual. Los bucles son nuestros amigos en esas
situaciones en las que queremos hacer algo un número determinado de veces, pero no queremos hacerlo línea por línea.

Yo, personalmente, guardo mi lista de la compra de la frutería en forma de diccionario de Python (lo más normal del mundo, ¿verdad?)
Tengo pares de llave y valor para el nombre de cada fruta y la cantidad que quiero ese día.

.. code-block:: python

    compra_frutas = {
        "manzana": 3,
        "pera": 1,
        "plátano": 8,
        "fresa": 20
    }

Si quiero imprimirme una lista más legible por un humano, podría imprimir cada par manualmente.

.. code-block:: python

    print(f"Compra:\n")
    print(f"{compra_frutas['manzana']} manzana(s)")
    print(f"{compra_frutas['pera']} pera(s)")
    print(f"{compra_frutas['plátano']} plátano(s)")
    print(f"{compra_frutas['fresa']} fresa(s)")

.. code-block:: output
    
    Output
    ------
    Compra:

    3 manzana(s)
    1 pera(s)
    8 plátano(s)
    20 fresa(s)

Es muy tedioso, imaginad tener 1000 elementos en la lista, sería tan grave para nuestras manos escribiéndolo como para nuestra cartera comprándolo.
Por eso existen los bucles, para facilitar esta tarea. Existen dos maneras de generar bucles, usanod *for* y usando *while*. A continuación veremos cuándo usar cada tipo de bucle.

for
------------

Con el *for* queremos repetir una acción un determinado número de veces en una colección de datos (en el ejemplo un diccionario, pero se puede usar con listas, tuplas o, incluso, con cadenas de texto, que son colecciones
de caracteres). En su sintaxis encontramos que hay dos elementos, la variable o variables (en este caso, con el diccionario, llave-valor), que representa el elemento actual con
el que estamos trabajando, y el objeto iterable, la colección sobre la que iteramos. Veámoslo con el ejemplo de imprimir mi lista de la compra:

.. code-block:: python

    print(f"Compra:\n")

    for fruta, cantidad in compra_frutas.items():
        print(f"{cantidad} {fruta}(s)")

.. code-block:: output
    
    Output
    ------
    Compra:

    3 manzana(s)
    1 pera(s)
    8 plátano(s)
    20 fresa(s)

Como se puede apreciar, aquello que queremos una vez, como, por ejemplo, la orden de comprar, lo dejamos fuera del bucle. Queremos iterar en el diccionario, así que el iterable
es compra_frutas o más bien su vista interna de las parejas en forma de tuplas («.items()» del diccionario). Las variables que queremos son dos,
la fruta (llave del diccionario) y la cantidad (el valor para cada llave). Después, sólo imprimimos una frase, pero su contenido cambia de manera dinámica y lo hace
tantas veces como elementos tengamos en la colección (4 veces en este caso). Aparte de *for* podemos usar *while*.

while
------------

Es muy parecido al *for*, pero su lógica difiere un poco. En este caso *while* significa mientras algo sea así haz esto, al contrario que con *for* que era equivalente
a «para cada caso en este iterable». En este caso necesitamos una manera de llevar la cuenta, ya que «mientras diccionario» no tiene ningún sentido. Al haber elegido un diccionario,
todo se complica un poco, debo transformarlo en una lista para poder llevar la cuenta, *while* no es capaz de mirar dentro del diccinario para saber cuántos
elementos tiene, le tenemos que ayudar a contar.

.. code-block:: python

    print(f"Compra:\n")

    contador = 0

    while contador < len(list(compra_frutas.items())):
        print(f"{list(compra_frutas.values())[contador]} {list(compra_frutas.keys())[contador]}(s)")

.. code-block:: output
    
    Output
    ------
    Compra:

    3 manzana(s)
    3 manzana(s)
    3 manzana(s)
    3 manzana(s)
    3 manzana(s)
    Hasta el infinito y más allá

¿Qué ha pasado? ¿Por qué me siento como Bill Murray en el *Día de la Marmota*? ¿Qué ha fallado? Vayamos punto por punto. Primero imprimimos la frase de comprar. Luego 
ponemos un contador a 0, recordemos que *while* suspendía matemáticas en el colegio. En el bucle decimos que mientras el contador sea inferior a la longitud (número)
del diccionario (nótese cómo primero hemos transformado los pares de elementos del diccionario a lista para poder usar la función «len()»), 
nos imprima los elementos. Cuando el contador sea igual a la cantidad de elementos del diccionario, ya habrá iterado por todos y podrá parar. Imprimimos tanto el valor como la llave
del diccionario con índice igual al contador actual, en este caso 0, primer elemento de nuestro diccionario convertido a lista. Cuando lo hace, vuelve a empezar y compara el contador con el
número de elementos...
¡Vaya!, ya veo el error. El contador siempre es cero, así que siempre será inferior al tamaño del diccionario y me imprimirá el elemento con índice 0 infinitas veces.
Si retocamos un poco el código:

.. code-block:: python

    print(f"Compra:\n")

    contador = 0

    while contador < len(list(compra_frutas.items())):
        print(f"{list(compra_frutas.values())[contador]} {list(compra_frutas.keys())[contador]}(s)")
        contador += 1

.. code-block:: output
    
    Output
    ------
    Compra:

    3 manzana(s)
    1 pera(s)
    8 plátano(s)
    20 fresa(s)

Hemos incorporado una línea que suma 1 al contador cada vez que itera, de tal manera que sabrá cuántas veces lo ha hecho y podrá parar al llegar al final.
Como veis *for* y *while* se pueden usar para lo mismo. Entonces, ¿cúando nos interesa usar *while*? Cuando, por ejemplo, queremos iterar indefinidamente hasta que
algo ocurra. 

.. code-block:: python
    
    while True:
        input_usuario = input("Escribe algo (pon 'stop' para parar): ")

        if input_usuario.lower() == 'stop':
            print("Saliendo del bucle. ¡Gracias! - Firmado: Bill :)")
            break

        print(f"Has escrito: {user_input}")

Este bucle es infinito porque True es siempre verdad. Si el usuario escribe cualquier cosa que no sea stop, el bucle continuará hasta el infinito. Cuando ponga stop,
el *if* pillará el input del usuario y romperá el bucle. En vez de break podríamos devolver False y cambiar el True, pero «romper» en inglés ilustra mejor lo que 
queremos conseguir. Y esto sería todo, si no entendéis algo podéis iterar sobre estas explicaciones todo lo que queráis.