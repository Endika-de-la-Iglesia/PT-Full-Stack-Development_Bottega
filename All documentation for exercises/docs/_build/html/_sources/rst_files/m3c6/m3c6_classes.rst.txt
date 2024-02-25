Clases en Python
================================

Python es un lenguaje de programación orientado a los objetos (OOP del inglés), ya que permite trabajar con 
los elementos o unidades del código que se denominan objetos. Todo en Python son objetos: las variables, las funciones... 
Voy a generar una cadena de texto dentro de una variable, es decir, un objeto.
Mediante la función ``type()``, vamos a ver qué tipo de objeto es.

.. code-block:: python

    frase = "Esto es un objeto de Python"
    print(type(frase))

.. code-block:: output
    
    Output
    ------
    <class 'str'>

Como era de esperar, el objeto es de tipo ``str``, o lo que es lo mismo, texto. Si nos fijamos en el *output*, la palabra 
utilizada no es tipo sino clase. Pero ¿qué quiere decir exactamente el término clase? Una clase en Python es la plantilla 
que se sigue para generar un objeto y darle una serie de características, denominadas atributos. Objetos de una misma clase, 
de un mismo tipo, comparten una serie de propiedades, que los definen como objetos de esa clase, y una serie de funciones
ejecutables sobre ese tipo de objetos, denominadas métodos. Podríamos resumir, de manera muy general, que una 
clase es el conjunto de instrucciones a seguir que nos dara un objeto determinado. Si creamos un objeto siguiendo esas instrucciones, 
creamos un objeto de una clase específica, y se dice que estamos generando una instancia de esa clase. Lo bueno que tienen las clases es que 
no tenemos que repetir constantemente código para generar objetos parecidos de un mismo tipo. Además, podemos establecer que métodos (funciones) 
podemos aplicarles a esos objetos. Esto nos permite trabajar de manera más eficiente con esos objetos que tantas similitudes comparten. 
Todo esto puede resultar un tanto abstracto, por ese motivo, lo voy a explicar paso a paso con un ejemplo. Empezaremos por crear una clase.

Método __init__(self)
----------------

Me encantan los juegos de rol y, últimamente, me he dedicado a jugar varias partidas del conocidísimo juego de rol *Dragones y Mazmorras* (D&D para los amigos). 
La primera vez que escuché el término clase para Python, mi mente se fue directamente a pensar sobre las clases de los personajes de los juegos de rol. 
Por eso, vamos a ver cómo crear una clase en Python como si de un juego de rol se tratara. Cuando se empieza una partida, es muy importante crear nuestro personaje, 
darle un nombre, elegir la raza y ese tipo de características. Definamos la clase de «Personaje» en Python:

.. code-block:: python

    class Personaje:
        juego = "D&D"

        def __init__(self, nombre, raza):
            self.nombre = nombre
            self.raza = raza

Aquí hemos creado una clase llamada «Personaje», que tiene un atributo de clase llamado juego, que nos 
indica de qué juego es este personaje. Todos los personajes que creemos con esta clase tendrán el atributo de clase de ser pertenecientes a «D&D». 
No queremos que, de repente, nuestro personaje sea de «Pokémon». 

Debajo definimos el método ``__init__(self)``, también conocido como constructor. Cada vez que queramos crear un objeto del tipo personaje, «init» 
será llamado de **manera automática** para construir esa instancia y le añadira los parámetros que le pasemos. El término «init» está rodeado 
por dos guiones bajos a cada lado, llamados *underscore*, y, como son dobles, los llaman *double underscore* o **dunder**. Esos guiones simplemente 
nos indican que init es un método (una función) especial de Python, en este ejemplo, un constructor de instancias de clase (para ver más ejemplos de
funciones dunder pinchar `aquí <https://www.geeksforgeeks.org/dunder-magic-methods-python/>`_). Como veis, el constructor requiere tres parámetros. 
Self hace referencia al objeto mismo que se está generando en ese momento, y nombre y raza hacen referencia a dos atributos de esa instancia en concreto.
Todos los personajes tienen el atributo de clase de ser de D&D, pero cada uno tendrá sus atributos de instancia (de objeto/personaje) específicos, en este caso, 
un nombre y una raza propia. Creemos dos personajes para ver cómo se hace:

.. code-block:: python

    personaje_uno = Personaje("Legolas", "Elfo del Bosque")
    personaje_dos = Personaje("Gimli", "Enano")

Hemos creado dos instancias de la clase personaje, cada una necesita un nombre y una raza (atributos de instancia) para pasárselos al método «init» que es 
llamado de forma automática al crear una instancia.

.. code-block:: python

    personaje_dos.raza = "Elfo del Bosque"

Resulta que un graciosillo ha decidido poner que Gimli, al que no le caen muy bien los elfos, es uno de ellos. ¿Qué podemos hacer para que otros jugadores 
no accedan y cambien el valor asignado al atributo de raza del personaje? Podemos «proteger» la variable poniendo «_» delante del nombre. 
De esta manera indicaremos a los que vean el código que no pueden andar variando los valores de esos atributos. 

.. code-block:: python

    class Personaje:
        juego = "D&D"

        def __init__(self, nombre, raza):
            self._nombre = nombre
            self._raza = raza

        def raza(self):
            return self._raza

    personaje_uno = Personaje("Legolas", "Elfo del Bosque")
    personaje_dos = Personaje("Gimli", "Enano")
    print(personaje_uno.raza())
    print(personaje_dos.raza())

.. code-block:: output
    
    Output
    ------
    Elfo del Bosque
    Enano

Hemos protegido nuestros atributos de personaje con «_» y, además, hemos creado un método en la clase (``raza(self)``) que nos devuelve la raza del personaje.
Si ahora el listillo de antes quiere jugárnosla, tendrá que usar ``personaje_dos._raza = "Elfo del Bosque"`` y no 
``personaje_dos.raza = "Elfo del Bosque"`` para
cambiar el valor del atributo. Aunque si tiene decencia como programador, no lo hará; nuestra declaración de intenciones 
de que no lo toque con «_» es bastante
clara. Nos han quedado unos personaje un poco sosos, les faltan unos cuantos métodos para que podamos considerarlos 
competentes en las aventuras que les esperan.

Métodos y decoradores
--------------------

Como ya hemos visto, los métodos son las funciones específicas de nuestra clase. Se definen con ``def nombre_función()``, 
como las funciones normales de Python.
Vamos a añadirles a nuestros personajes la capacidad de atacar a los enemigos mediante un método. Vamos a añadir 
una función para poder pedirle el nombre a 
cada personaje ``def nombre()`` y vamos añadir otra para que ataquen (``def ataque()``). Cabe destacar que todos 
estos métodos tendrán a self como argumento
posicional para tener accesso a toda la información, variables y atributos de la clase Personaje. Para que sea 
más realista el ataque, he implementado un dado
de veinte caras (como en D&D) que sacará un número entre 1 y 20 incluidos para determinar el éxito del ataque 
(gestionado por medio de condicionales). 

.. code-block:: python

    import random

    class Personaje:
        juego = "D&D"

        def __init__(self, nombre, raza):
            self._nombre = nombre
            self._raza = raza

        def raza(self):
            return self._raza

        def nombre(self):
            return self._nombre

        def ataque(self):
            dado = random.randint(1, 20)
            if dado == 1:
                resultado = "Pifia"
            elif dado == 20:
                resultado = "Crítico"
            else:
                resultado = "Daño normal"
            return f"{dado}({resultado})"

    personaje_uno = Personaje("Legolas", "Elfo del Bosque")
    personaje_dos = Personaje("Gimli", "Enano")
    print(f"{personaje_uno.nombre()}: {personaje_uno.ataque()}")
    print(f"{personaje_dos.nombre()}: {personaje_dos.ataque()}")

.. code-block:: output
    
    Output
    ------
    Legolas: 13 (Daño normal)
    Gimli: 20 (Crítico)

Fijaos en que llamamos a cada método después del objeto ``personaje_uno.ataque()``, esto se hace así debido a 
que son funciones específicas de la instancia de la
clase Personaje. Todos los objetos que pongamos que no sean Personajes no podrán atacar (llamar al método ``ataque()``). 
¡Parece que Gimli ha tenido suerte en su tirada
y ha hecho un crítico! 

El rol es más complejo que esto, y las funciones de Python también. De hecho, existen los decoradores de función, o método, que nos permiten
dar una mayor versatilidad y modificar nuestras funciones. Veamos primero, antes de usar ningún decorador, 
cómo una función puede ser el argumento de otra para dar
unos resultados determinados. En este caso queremos poder aplicar el resultado de los dados a tres de las 
posibles acciones que puede realizar nuestro personaje en
su turno (atacar, defender o conversar).

.. code-block:: python
    :emphasize-lines: 16, 17, 19, 20, 22, 23, 25-35, 37, 38, 39

    import random

    class Personaje:
        juego = "D&D"

        def __init__(self, nombre, raza):
            self._nombre = nombre
            self._raza = raza

        def raza(self):
            return self._raza

        def nombre(self):
            return self._nombre

        def ataque_func(self):
            return "Ataque"
        
        def defensa_func(self):
            return "Defensa"
        
        def hablar_func(self):
            return "Conversación"

        def dado(func):
            def wrapper (self):
                dado = random.randint(1, 20)
                if dado == 1:
                    resultado = "Pifia"
                elif dado == 20:
                    resultado = "Crítico"
                else:
                    resultado = "Normal"
                print(f"{self._nombre}: {func(self)} - {dado} ({resultado})")
            return wrapper
        
        ataque = dado(ataque_func)
        defensa = dado(defensa_func)
        hablar = dado(hablar_func)

    personaje_uno = Personaje("Legolas", "Elfo del Bosque")
    personaje_dos = Personaje("Gimli", "Enano")
    personaje_uno.ataque()
    personaje_uno.defensa()
    personaje_uno.hablar()

.. code-block:: output
    
    Output
    ------
    Legolas: Ataque - 9 (Normal)
    Legolas: Defensa - 3 (Normal)
    Legolas: Conversación - 12 (Normal)

En las líneas resaltadas muestro cómo se crea una nueva función ``dado()`` que acepta una función como argumento 
y devuelve una función (``wrapper()``) que
modifica el efecto de las tres funciones de acción de nuestro personaje. Asimismo, he generado tres variables, 
o atributos, dentro de la clase que pasan
las funciones de interés (``ataque_func()``, ``defensa_func()``, ``hablar_func``) como argumentos de la función ``dado()``. 
Los decoradores de esas funciones nos permiten ponerlo un poco más limpio, pero a efectos
prácticos es lo mismo, cambiar la funcionalidad y comportamiento de un método sin necesidad de reescribir cada método 
indivualmente, evitando, además, repeticiones innecesarias
del código. Los decoradores se indican por medio de ``@nombre_del_decorador``, en el ejemplo del dado, ``@dado`` será 
el decorador de cada método de acción de personaje.
Ese decorado modificará el comportamiento de cada método y, cuando sean llamados para la instancia, no sólo devolverán 
un texto, sino que activarán la función ``dado()``.

.. code-block:: python
    :emphasize-lines: 28, 32, 36

    import random

    class Personaje:
        juego = "D&D"

        def __init__(self, nombre, raza):
            self._nombre = nombre
            self._raza = raza

        def raza(self):
            return self._raza

        def nombre(self):
            return self._nombre
        
        def dado(func):
            def wrapper (self):
                dado = random.randint(1, 20)
                if dado == 1:
                    resultado = "Pifia"
                elif dado == 20:
                    resultado = "Crítico"
                else:
                    resultado = "Normal"
                print(f"{self._nombre}: {func(self)} - {dado} ({resultado})")
            return wrapper
        
        @dado
        def ataque(self):
            return "Ataque"
        
        @dado
        def defensa(self):
            return "Defensa"
        
        @dado
        def hablar(self):
            return "Conversación"

    personaje_uno = Personaje("Legolas", "Elfo del Bosque")
    personaje_dos = Personaje("Gimli", "Enano")
    personaje_uno.ataque()
    personaje_uno.defensa()
    personaje_uno.hablar()

.. code-block:: output
    
    Output
    ------
    Legolas: Ataque - 18 (Normal)
    Legolas: Defensa - 2 (Normal)
    Legolas: Conversación - 20 (Crítico)

Como podéis apreciar, hemos decorado tres de los métodos de la clase personaje, para tener el mismo efecto que en 
el código anterior (nótese la importancia de declarar
la función dado antes de usarla como decorador). 

Dentro de las clases, existen dos 
decoradores clásicos relacionados con la capacidad de acceder a los atributos de la instancia de la clase y 
poder, o no, modificarlos si queremos. Esos decoradores son
``@property``, un decorador que aplica la función ``getter()`` para obtener información sobre un atributo, y ``atributo.setter()``, un decorador que permite modificar
el valor del atributo de interés. Voy a añadir, como es típico en los juegos de rol, un nivel a los personajes, 
y, con los dos decoradores clásicos, voy a permitir que 
se pueda consultar el nivel y se pueda incrementar cuando los personajes ganen experiencia. 

.. code-block:: python
    :emphasize-lines: 9, 17-19, 21-23, 53-56

    import random

    class Personaje:
        juego = "D&D"

        def __init__(self, nombre, raza):
            self._nombre = nombre
            self._raza = raza
            self._nivel = 1

        def raza(self):
            return self._raza

        def nombre(self):
            return self._nombre
        
        @property
        def nivel(self):
            return self._nivel
        
        @nivel.setter
        def nivel(self, num):
            self._nivel = num
            
        def dado(func):
            def wrapper (self):
                dado = random.randint(1, 20)
                if dado == 1:
                    resultado = "Pifia"
                elif dado == 20:
                    resultado = "Crítico"
                else:
                    resultado = "Normal"
                print(f"{self._nombre}: {func(self)} - {dado} ({resultado})")
            return wrapper
        
        @dado
        def ataque(self):
            return "Ataque"
        
        @dado
        def defensa(self):
            return "Defensa"
        
        @dado
        def hablar(self):
            return "Conversación"
        
        

    personaje_uno = Personaje("Legolas", "Elfo del Bosque")
    personaje_dos = Personaje("Gimli", "Enano")
    print(personaje_uno.nombre())
    print(personaje_uno.nivel)
    personaje_uno.nivel = personaje_uno.nivel + 1
    print(personaje_uno.nivel)

.. code-block:: output
    
    Output
    ------
    Legolas
    1
    2

Aquí vemos el uso de esos dos decoradores con claridad. He generado un atributo que indica el nivel del personaje 
(con un valor predeterminado de 1) y gracias
al decorador ``@property`` podemos llamar a ese atributo de nuestra instancia (personaje_uno) y verlo. Es importante 
ver que para consultar el nombre del personaje tenemos
que llamar a la función ``nombre()`` y no podemos hacer ``personaje_uno.nombre``, ya que esa función no está decorada 
(modificada) con el decorador de propiedad.
Cuando queremos subir de nivel al personaje, como tenemos un decorador de tipo setter, podemos ajustar de nuevo el 
valor del atributo nivel, en este caso a nivel 2. 

Polimorfismo y herencia de clases
--------------------------------------

Polimofrismo hace referencia a la capacidad de una función, método o, incluso, clase de trabajar con diferentes tipos 
de objeto y comportarse de manera distinta
dependiendo de la situación. Para ilustrarlo mejor, voy a mostrar una herencia de clases con mi ejemplo de los personajes 
de rol, para ver con 
claridad cómo el comportamiento de una clase puede cambiar de manera dinámica y adoptar varias formas acorde a ello. 
En los juegos de rol, los personajes pueden ser 
de varios tipos. Un elfo como Legolas sería un buen personaje explorador, mientras que Gimli pegaría bastante como bárbaro, 
usando su fuerza bruta. En este ejemplo, voy 
a crear dos subclases de personaje, explorador y bárbaro, que heredarán atributos de la clase principal 
personaje, pero que modificarán, mediante polimorfismo, algunos de los
métodos. 

.. code-block:: python
    :emphasize-lines: 49-52, 54-57

    import random

    def dado(func):
        def wrapper (self):
            dado = random.randint(1, 20)
            if dado == 1:
                resultado = "Pifia"
            elif dado == 20:
                resultado = "Crítico"
            else:
                resultado = "Normal"
            print(f"{self._nombre}: {func(self)} - {dado} ({resultado})")
        return wrapper

    class Personaje:
        juego = "D&D"

        def __init__(self, nombre, raza):
            self._nombre = nombre
            self._raza = raza
            self._nivel = 1

        def raza(self):
            return self._raza

        def nombre(self):
            return self._nombre
        
        @property
        def nivel(self):
            return self._nivel
        
        @nivel.setter
        def nivel(self, num):
            self._nivel = num

        @dado
        def ataque(self):
            return "Ataque"
        
        @dado
        def defensa(self):
            return "Defensa"
        
        @dado
        def hablar(self):
            return "Conversación"
        
    class Explorador(Personaje):
        @dado
        def hablar(self):
            return "Observación y conversación diplomática"
        
    class Barbaro(Personaje):
        @dado
        def hablar(self):
            return "Ataque"
        

    personaje_uno = Explorador("Legolas", "Elfo del Bosque")
    personaje_dos = Barbaro("Gimli", "Enano")
    personaje_uno.hablar()
    personaje_dos.hablar()

.. code-block:: output
    
    Output
    ------
    Legolas: Observación y conversación diplomática - 9 (Normal)
    Gimli: Ataque - 18 (Normal)

Aquí hay un claro caso de polimorfismo. Lo primero de todo, he sacado la función ``dado()`` de dentro 
de la clase personaje para poder decorar 
métodos de todas las clases y subclases. En segundo lugar, vemos que el método de hablar adquiere dos comportamientos, o formas, 
dependiendo de si son
llamados por la clase de explorador o la clase de bárbaro (que por lo demás son idénticas a la de personaje). 
Cuando un objeto de la clase bárbaro, me refiero
al pobre Gimli, utiliza el método hablar, ataca en lugar de conversar, dado que las palabras no son lo suyo. 
Esto puede ser muy útil para aportar distintos comportamientos
en ciertos métodos provinientes de una misma clase. El ejemplo clásico en aplicaciones web es la distinción entre administradores, 
usuarios registrados y usuarios invitados;
todos tienen atributos en común, pero algunos se ven modificados por su respectiva subclase para otorgar una flexibilidad 
en las acciones que cada uno puede realizar. 