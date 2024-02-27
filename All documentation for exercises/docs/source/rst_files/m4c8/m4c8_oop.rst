Programación orientada a objetos (OOP)
=====================================

En JS, la programación orientada a objetos se refiere al uso de elementos de código, denominados objetos,
para agrupar datos y métodos (funciones) que se ejecutan sobre esos datos con el fin de diseñar y organizar los
programas. Al igual que con :doc:`Python <../m3c6/m3c6_classes>`, es muy importante entender las clases y los objetos (instancias de las clases).

Clases e instancias
-----------------------

Vamos a usar el mismo ejemplo que se utilizó en Python para contruir una clase, llamada personaje,
que nos permitirá generar instancias (objetos) del tipo personaje de juego de rol. 

.. code-block:: javascript

    class Personaje {
        constructor(nombre, raza) {
            this._nombre = nombre;
            this._raza = raza;
        }

        static juego = "D&D";
    
        get nombre() {
            return this._nombre;
        }
    
        get raza() {
            return this._raza;
        }
    
        ataque() {
            return "Ataque";
        }

        static saludar() {
            return "Saludos, aventurero"
        }
    }



Este ejemplo es simplemente para ver la sintaxis específica de JS vs la de Python. Para iniciar una instancia
de Personaje, necesitamos un ``constructor(parámetros)``, que es lo mismo que ``__init__()`` en Python.
Dentro del constructor declaramos y asignamos valores a los atributos de la instancia que se cree usando
esa clase como plantilla. Asimismo, fuera del constructor, tenemos un atributo estático de clase que es el juego
al que pertenece el personaje, ``static`` está delante de esa variable para indicar que es de la clase y no del objeto generado
con su «plano». Después, tenemos toda una serie de métodos de la instancia, tales como decir el nombre, raza o realizar una acción varias.
Por último, tenemos ``static saludar()`` que es un método de la clase, y no la instancia. Veamos cómo generar una instancia y usarla 
para realizar acciones. 

.. code-block:: javascript

    const nuevoPersonaje = new Personaje("Legolas", "Elfo del bosque");
    console.log(nuevoPersonaje.nombre);
    console.log(nuevoPersonaje.ataque());
    console.log(Personaje.saludar());

.. code-block:: output

    Output 
    ------
    Legolas
    Ataque
    Saludos, aventurero

En la primera línea vemos como instanciar la clase de personaje pasándole dos atributos al constructor.
En la segunda usamos un método ``getter`` para dar información sobre un atributo de la instancia (nótese la sintaxis
de ``instancia.getter``). En la tercera usamos un método de instancia (``instancia.método()``).
En la cuarta usamos un método estático de la clase (importante: no ponemos ``instancia.métodoEstático()`` lo que ponemos
es ``nombreClase.métodoEstático()``).

Como quizá no haya quedado claro del todo, quiero que creéis una instancia de la clase ``Personaje``, le asignéis un nombre y una raza, y os 
lo diga. Para lograrlo, tenéis que completar los huecos del código de ejemplo.

.. raw:: html
    
    <div class="livecodes" style="height: 600px;" data-options='{"appUrl":"https://v24.livecodes.io/","config":{"activeEditor":"script","tools":{"enabled":"all","status":"full","active":"console"}},"loading":"eager"}'>
    <pre data-lang="html"></pre>
    <pre data-lang="css"></pre>
    <pre data-lang="javascript">class Personaje {
        constructor(nombre, raza) {
            this._nombre = nombre;
            this._raza = raza;
        }

        static juego = &#34;D&amp;D&#34;;
    
        get nombre() {
            return this._nombre;
        }
    
        get raza() {
            return this._raza;
        }
    
        ataque() {
            return &#34;Ataque&#34;;
        }

        static saludar() {
            return &#34;Saludos, aventurero&#34;
        }
    };

    const nuevoPersonaje = PONED AQUÍ EL CÓDIGO;
    console.log(`Me llamo ${nuevoPersonaje.nombre} y soy un ${PONED CÓDIGO}`);
    </pre>
    </div>
    <script defer src="https://unpkg.com/livecodes@0.4.0/livecodes.umd.js" data-prefill></script>
