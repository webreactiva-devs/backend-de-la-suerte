# Backend de la suerte

> Desafío de programación dividido en tres retos donde los participantes tendrán que trabajar con el BaaS que les toque en suerte, aunque podrán elegir el lenguaje de programación con el que quieren trabajar. 


![My Image](suerte.jpeg)

Bienvenid@s a un nuevo reto de programación de la comunidad malandriner.

Propondremos 3 retos en 3 semanas y remataremos con una sesión en directo prime para celebrar una nueva fiesta del código.


## Te contaré una historia

Estás en mitad de la nada.

A tu alrededor solo unos cactus, arena y un botijo. Pegas un trago de agua para disfrutar del último frescor en la garganta antes de comenzar un cambio de vida.

Lo sabes. Si picas allí encontrarás tu suerte. 

El primer impacto del metal escupe polvo y miseria. Sabes que tienes que persistir. El auténtico oro está ahí abajo, en el núcleo, en el back que solo tu sabrás sacar a la luz. Es "El backend de la suerte" (o no, que en ese pedazo de tierra hay muchos lagartos).

## Mecánica del desafío

Se trata de trabajar con las herramientas que más te gusten y solo una impuesta: el backend.

### Punto de inicio

Hemos sorteado entre los participantes una lista de Backend-as-a-Service muy conocidas (casi todas). Cada uno de los desafiantes tendrá que ejecutar los retos del desafío usando el BaaS elegido.

Existen tres opciones para elegir el BaaS:
- Si te quedas con el que te ha tocado en suerte, tienes 4 puntos más al final del desafío si completas la primera prueba
- Si eliges otro de los que está en la lista, sumas 1 punto en vez de 4
- Si eliges cualquier otro sistema de backend de tu gusto podrás participar, pero no tendrás puntos extra, solo los que logres en cada desafío.

### Retos

Se propondrán 3 retos, uno por semana.

Cada reto se podrá resolver con la tecnología que más te guste salvo la parte del Backend, como ya se ha explicado anteriormente.

En cada reto se ganan unos puntos si es superado.

Los puntos se acumulan en la clasificación y son "boletos" para el sorteo de premios que se celebrará el día de cierre del desafío.

## Cómo participar en cada reto

Al ser esta una prueba donde cada uno puede realizar el ejercicio como quiera lo haremos de la siguiente forma.

1. Haz un fork de este repositorio si quieres
2. Trabaja contra ese repositorio de forma independiente, no haremos uso del PR para unir las soluciones, las publicaremos como parte de este Readme
3. Con cada reto tendrás que enviar una [Issue](https://github.com/malandrinersdev/backend-de-la-suerte/issues) indicando la dirección del repositorio con la solución

## Participantes que han entregado al menos 1 reto

| |
| --- |
| [skcode7](https://github.com/skcode7) | 
| [yurigo](https://github.com/yurigo) | 
| [prinhelmet](https://github.com/prinhelmet) |
| [gabrim90](https://github.com/gabrim90) |
| [imanolvalero](https://github.com/imanolvalero) |
| [xurxof](https://github.com/xurxof) |


## Primer reto: ¡Oro! 👑

Has tenido suerte, ya has encontrado Oro a las primeras de cambio.

Bueno, lo que has encontrado es un emoji de oro: 👑

El primer reto consiste en crear la infraestructura necesaria para mostrar en tu solución un emoji que se cargue directamente desde el backend.

No vale insertarlo directamente en el frontend. Tiene que hacerse una llamada al backend, de la forma que estimes oportuno, para mostrarlo.

Fecha límite: 23 de Marzo de 2022 a las 23:59 CET.


### Reto 1: Reparto de puntos

La solución correcta sumará 2 puntos en tu casillero.




## Segundo reto: Pico y pala ⛏

> Ahora tienes la primera pepita de oro, pero, ¡el backend tiene mas!


### Parte básica

Lo sabes y quieres conseguirlo.

Así que llega el momento de sacar más oro. Pero para eso hay que sudar con el pico y pala. 😅

El frontend no puede saber cuantas veces tienes que usar el pico para extraer el oro. Recuerda, en el frontend no hay secretos y nosotros tenemos muchos.

El número de veces para picar es cosa del backend.


Así que tienes que resolver un sistema en el backend que tras picar un número determinado de veces (entre 1 y 5) encuentre una nueva pepita de oro.

👉 El número de veces a picar puede ser una constante siempre igual. También puede ser un número aleatorio generado cada vez que se reinicia el contador.

👉 No es necesario tener un contador del número de pepitas de oro que has extraído.



### Extra 1: Registra para no perder la pista

> Hay más gente picando para sacar oro, ¿lo sabías?


Es importante dejar bien marcado quién llega antes. Como aquellos que llegaron los primeros al Polo Sur.

Así que cada vez que piques, deberás dejar guardado un registro de que lo has hecho. Guardando el momento temporal exacto en el que has picado.

👉 Este dato no tiene porque verlo nadie más que tú, pero si tenerlo persistido en el backend.


### Extra 2: Autenticación contra ladrones del montón

> ¿Qué es eso de que pueda picar cualquiera? Hay seres invisibles que quieren robarnos nuestro oro...

Por favor, necesitamos una autenticación que valide que somos nosotros los que vamos a picar.

La autenticación puede ser cualquiera de estas (basta con una):

- Solo contraseña
- Email y contraseña
- Servicio de terceros (Google, Twitter, Github)

👉  Solo podrá picar el usuario que se autentifique.

👉  La validación puede ser "no segura", pero no tiene que estar solo en el frontend. Tiene que pasar por el backend con la metodología que más te guste. Puede ser "no segura".

### Reto 2: Reparto de puntos

🟢 No es necesario completar los tres retos. Basta con el básico. 

- Reto básico: 2 puntos
- Extra 1: 2 puntos
- Extra 2: 2 puntos

Total posibles a conseguir en el reto: 6 puntos.


### Plazo de entrega

30 de Marzo, a las 23:59 para la "Parte básica" del Reto 2.

Extra 1 y Extra 2 tendrán más días para poder ser presentados.



> Este desafío forma parte de las actividades de la suscripción a [danielprimo.io](https://danielprimo.io)
