## Datos de la prueba

 - Empresa: [Clarity AI](https://clarity.ai/)
 - Puesto: [Frontend Developer](https://talent.clarity.ai/o/frontend-developer-madrid)
 - Punto del proceso cuando se realiza la prueba: Lo primero de todo. Sin haber siquiera hablado anteriormente.

Fui contactado por una empresa de _selección_. El primer paso, si estaba interesado, era realizar la prueba, sin haber hablado de nada con la empresa final y sin conocer ningún tipo de detalle más allá de lo publicado en el anuncio original.

## La prueba

El enunciado del problema se presenta como un enlace a un fichero alojadoen CodePen. Solo incluye un breve README (ver [enunciado-prueba-README.md](./enunciado-prueba-README.md) y en el email únicamente se indicaba:

 - Un plazo de una semana para realizar la prueba
 - Una estimación de que la prueba no debería llevar "más de dos o tres horas"
 - Una petición de no subir la prueba a un repositorio público y de enviar la respuesta en un zip por algún servicio "como wetransfer".

## Otros datos e impresiones

El enunciado es más bien escaso. Se incluyen un par de enlaces, uno con todos los datos y otro con una muestra de ejemplo. Son enlaces a ficheros JSON estáticos alojados en Bitbucket. Parece sugerir que estos deban tratarse como endpoint de un servicio, aunque no dice nada específico al respecto. Mi impresión es que sería igualmente válido descargarse el fichero JSON e incluirlo en la aplicación, aunque son unos 3MB de fichero (18800+ películas) y no parece muy práctico, claro.

De hecho se hace referencia a que es una gran cantidad de datos y que hay que tenerlo en cuenta para temas de rendimiento. Mi idea inicial ha sido bajar el fichero y montar un pequeño servicio local que añada paginación y ordenado, que parece una solución bastante evidente.

## Evaluación general de la prueba

Es una prueba _poco interesante_. Es bastante típica y no tiene ninguna particularidad especial. No está relacionada de ningún modo con el negocio de la empresa.

La estimación proporcionada de "dos o tres horas" parece totalmente absurda y ridícula si se pretende entregar un resultado con una cierta calidad. Realizar el servicio de ordenación y paginado es decisión mía, pero no realizarlo parece un camino demasiado obvio hacia una carga inaceptable. En cualquier caso, hacerlo añade tiempo a la estimación, pero no hacerlo añadiría también tiempo al necesitar un cuidadoso trabajo de optimización en el navegador.
