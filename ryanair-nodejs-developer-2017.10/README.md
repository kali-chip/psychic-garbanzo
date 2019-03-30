## Datos de la prueba

 - Empresa: [Ryanair Labs Madrid](https://careers.ryanair.com/ryanair-labs-madrid/)
 - Puesto: NodeJS Developer / Frontend Developer
 - Punto del proceso cuando se realiza la prueba: Después de una primera entrevista telefónica de unos 30 minutos

## La prueba

No tengo el enunciado original de esta prueba. Ryanair Labs utiliza una variedad de pruebas y las va actualizando con el tiempo. Muchas de las soluciones enviadas por candidatos pueden encontrarse fácilmente en repositorios públicos, pero son pruebas diferentes y cada cierto tiempo cambian. ( [e.g.](https://github.com/search?q=ryanair&type=Repositories) )

Viendo pruebas actuales, la que a mi me enviaron es bastante más sencilla. Se trata de una prueba combinada que incluye el desarrollo de un pequeño servicio de back y un pequeño componente de front.

En concreto es un componente de auto-completado / búsqueda de aeropuertos. Ellos proporcionaban un servicio sobre GraphQl ([disponible aquí](https://nodejs-tech-test.herokuapp.com/graphql?query={airports{name,seoName,iataCode,routes}})) que devuelve la información sobre todos los aeropuertos donde trabaja la empresa, así como sus conexiones. Sobre esto el candidato debe construir un componente que permita buscar aeropuertos, en general o sólo los que tengan conexión desde Dublín.
La prueba consistía tanto en el desarrollo del cliente (front) como el de un pequeño servicio que buscaba en los datos del servicio de GraphQL procesándolos para buscar las conexiones o hacer búsqueda parcial (autocompletado),

## Otros datos e impresiones

Se da bastante libertad al candidato para que tome las decisiones que crea oportunas. Por ejemplo, no se mencionaba si se debía atacar dinámicamente al servicio GraphQL o si se debía hacer una carga inicial de todos los datos para evitar peticiones innecesarias.

Tampoco se obligaba al candidato a utilizar ningún tipo de framework o librería. En este punto yo tuve un pequeño conflicto, ya que decían literalmente que se podía usar "cualquier framework o librería que se considere oportuno y con la que te sientas cómodo". Yo, viendo que realmente era un componente muy sencillo y pequeño opté por no usar ninguno y una solución sencilla y limpia me ocupó apenas unas 100 líneas de código muy legible y bien estructurado. Sin embargo, esto después un punto negativo ya que lo que querían decir es que se podía elegir el que se quisiera pero había que usar algún framework obligatoriamente (es más, uno que fuera medianamente popular y conocido).

Según el perfil, algunas pruebas mencionan o no, el aspecto visual. En mi caso no se mencionaba la necesidad de realizar esfuerzo en el diseño. Yo opté por algo simple, añadiendo solo como detalle interesante un pequeño estilo que resaltaba entre los resultados dónde aparecía la cadena de texto buscada, pero más como un detalle de usabilidad que de diseño.

No se mencionaba una estimación de cuánto tiempo requería aunque telefónicamente me dijeron que tenía una semana y que me podría llevar un par de horas al día o así. Es decir, más o menos estimaban unas 10 horas de trabajo.

## Evaluación general de la prueba

Lamentablemente mi impresión de esta prueba fue **muy** negativa, aunque no se debió tanto a la prueba en sí misma como a la gestión de la misma. Ryanair Labs estaba abriendo oficina en Madrid y no tenían aún equipo. La evaluación de la prueba la realizaba el responsable de desarrollo a nivel de toda Europa. Debía -comprensiblemente- tener muy poco tiempo disponible, y -no tan comprensiblemente- tuve que esperar cerca de dos meses y medio para recibir una evaluación. Cuando esta llegó, fue muy insatisfactoria: No lo habían podido probar porque _su_ servicio sobre Heroku estaba caído y no podían solucionarlo en ese momento. Dieron un vistazo muy genérico al código y pusieron como pega que no había utilizado ningún framework.

Al margen de esto, la prueba, la de entonces o alguna variante más reciente que incluye _además_ buscar el vuelo más barato en la ruta seleccionada, requiere un esfuerzo considerable. Espero que hayan mejorado en la respuesta que dan después a los candidatos -aceptados y rechazados-, pero en cualquier caso creo que es un esfuerzo exigido demasiado alto. Haciendo las cosas _bien_, con un acceso "correcto" al servicio de GraphQL, el servicio REST, un diseño razonablemente limpio y adaptable, con tests y demás, una estimación de dos jornadas completas (16 horas) es incluso escasa.
