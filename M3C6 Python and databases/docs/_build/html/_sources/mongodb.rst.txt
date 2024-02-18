Bases de datos
================================

En la era de la información, las bases de datos desempeñan un papel crucial al almacenar y gestionar grandes cantidades de datos. 
Hay dos categorías principales de bases de datos: SQL (*Structured Query Language*) y NoSQL (*Not Only SQL*).

Tipos de bases de datos
------------------------

**Bases de datos SQL**

Bases de datos en las que la búsqueda de datos se basa en un sistema estructurado. Utilizan modelos de datos estructurados y 
tablas para almacenar toda la información. Cada fila en una tabla representa un registro, y las relaciones entre tablas se gestionan 
mediante claves específicas. En un momento en el que el *smart data* (datos estratégicos correctamente clasificados y guardados de manera
uniforme) está en auge para el desarrollo de modelos basados en *machine learning*, que permiten a las empresas tener una ventaja
sobre el control de los datos, es importante tener bases de datos con estructuras estandarizadas. Por eso, las bases de datos SQL 
requieren un esquema fijo y predefinido, lo que significa que la estructura de la base de datos debe estar definida antes de insertar datos.

**Bases de datos NoSQL**

Las bases de datos NoSQL ofrecen flexibilidad en su esquema, ya que no tienen un formato fijo. 
Pueden manejar datos no estructurados o semiestructurados y permiten realizar cambios en el esquema de forma dinámica. 
Estas bases de datos pueden utilizar diversos modelos de datos, como documentos, clave-valor, columnares o basados en gráficos, 
adaptándose a las necesidades específicas de la aplicación en uso. Asimismo, están diseñadas para escalar horizontalmente, distribuyendo 
la carga en varios servidores para mejorar el rendimiento y la capacidad de almacenamiento. 
Este enfoque proporciona una mayor flexibilidad y escalabilidad en comparación con las bases de datos SQL tradicionales.

MongoDB (ejemplo de base de datos NoSQL)
----------------------------------------

MongoDB es una base de datos de tipo NoSQL que destaca por su enfoque en documentos y colecciones de documentos. 

Algunas características clave de MongoDB son:

* Documentos BSON: Almacena datos en formato BSON (Binary JSON), que es una representación binaria de JSON (notación de objetos de Javascript). Cada registro es un documento flexible con pares clave-valor, independiente del resto de registros.

* Esquema dinámico: Permite esquemas dinámicos, lo que significa que cada documento en una colección puede tener un esquema diferente.

* Escalabilidad horizontal: Puede escalar horizontalmente de manera eficiente al distribuir los datos en clústeres y agregar más nodos según sea necesario.

* Buena para datos no estructurados: Ideal para almacenar y procesar datos no estructurados o semiestructurados, como documentos, logrando flexibilidad y velocidad.

En conclusión, MongoDB es una base de datos que destaca por su flexibilidad, 
escalabilidad horizontal y capacidad para manejar datos no estructurados, es decir, las características de una base de datos NoSQL,
lo que la hace adecuada para aplicaciones modernas con requisitos de almacenamiento de datos dinámicos, tanto en tamaño como en tipo.