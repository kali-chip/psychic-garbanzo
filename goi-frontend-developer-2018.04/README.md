## Datos de la prueba

 - Empresa: [GOI](https://www.letsgoi.com/)
 - Puesto: Frontend Developer
 - Punto del proceso cuando se realiza la prueba: Después de una entrevista personal con el responsable directo de desarrollo, de unos 45 minutos.

## La prueba

Toda la explicación se incluye en el README (ver [enunciado-prueba-README.md](./enunciado-prueba-README.md); es una _to-do list_ típica. Durante la entrevista se explicaba que la prueba era _la única forma_ que tenían de poder evaluar candidatos, que se pediría un acabado de calidad valorando mucho los puntos que se indican como _bonus_ y que se deben implementar todas las funcionalidades pedidas.

Aunque el fichero de datos está disponible online, lo incluyo en la carpeta [extra](./extra). Es un array de 200 tareas, cada una de las cuales tiene esta pinta:

```javascript
{"order_id":1,"first_name":"Golda","last_name":"Beckley","phone":"+86 363 913 5740","date":"3/2/2017","comments":"Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","status":"shipped"}
```

## Otros datos e impresiones

No se menciona en ningún momento una estimación sobre lo que puede llevar la prueba. En la entrevista personal se da una semana de plazo y se comenta que _es fácil que necesites unas 8 o 10 horas para **hacerlo bien**_. Mi propia impresión es que si se pretende realizar la prueba completa, con los _bonus_ y el nivel de acabao que se pide, seguramente se vaya fácilmente a dos jornadas completas (16 horas) o más.

La empresa lleva usando esta misma prueba ya un tiempo, **con alguna pequeña variación**. En Abril de 2018 estaba alojada en Bitbucket (actualmente se puede encontrar en [Gitlab](https://gitlab.com/letsgoi/goi-codechallenge/frontend-codechallenge)) y utilizaba el servicio genérico de [JSONPlaceholder](https://jsonplaceholder.typicode.com) para los datos -una lista de tareas-. Hoy proporciona un servicio aparentemente dedicado para los datos alojado en Amazon S3 que devuelve un listado completo, no de tareas sino de **pedidos**, pero que, como se reconoce en el propio README, _falla_ si se intenta operar sobre un pedido concreto (leer, escribir).

En aquel momento tampoco había una clara especificación de si el puesto se consideraba _senior_ o _junior_. De hecho no tenían aún el equipo. Acababan de contratar al jefe con la misión de que él contratara un equipo y lo pusiera en marcha y que, básicamente, empezaran el proyecto desde cero.

Se sugería usar _React_ o _Vue_ porque no tenían claro cuál terminarían usando, "probablemente Vue". Así fue y ahora la prueba pide explícitamente el uso de Vue.js.

## Evaluación general de la prueba

Personalmente opté por limitar el tiempo de forma estricta a **2 horas**, aunque terminé dedicando quizá dos horas y media o tres, si incluimos preparación. En cualquier caso no tenía intención de continuar el proceso.

Con esta idea, directamente utilicé Bulma/Buefy, que tiene un componente de lista ya hecho con toda la funcionalidad de paginado y de filtrado, y unos botones para completar. Ya puestos a hacer el mínimo, incluí SuperAgent para hacer la llamada al servicio y evitar preocupaciones de dominios y demás.

Con estas limitaciones y decisiones, el ejercicio se puede realizar en dos horas. Sin tests y con un diseño sencillo pero limpio (el enunciado pide también un "diseño atractivo"). El resultado final es tan aburrido y carente de interés como lo es la propia prueba. En serio, ¿una _lista de tareas_? ¿Con los cientos o miles de tutoriales que hacen _ese mismo ejemplo_? ¿Con TodoMVC.com? La prueba actual, con _pedidos_ por lo menos tiene relación con el negocio de la empresa, pero sigue teniendo _escaso interés_ como prueba. En ambos casos, mi estimación es similar: Si se desarrolla el componente de la tabla, se hace desde cero un _diseño atractivo_ y _responsive_ y además se incluyen tests, el tiempo necesario es claramente excesivo para una prueba de este tipo.

_Nota:_ La solución incluída está basada en la versión antigua de la prueba. JSONPlaceholder devuelve _tareas_ con unas propiedades consistentes (e.g. `completed: true`) mientras que el servicio ofrecido actualmente es un listado de _pedidos_, pero las diferencias deberían ser mínimas.
