# Code Challage - Frontend

Hola,

Antes de nada, agradecerte dedicar parte de tu tiempo a la realización de este pequeña prueba técnica.

Ésta consiste en el desarrollo de la parte frontend de una sencilla SPA (Single Page Application) de gestión de pedidos.

Se debe crear un servicio para obtener las tareas del siguiente endpoint:
`GET http://goi.front-challenge.s3-website-eu-west-1.amazonaws.com/`

## Funciones
- Mostrar el listado de pedidos con fecha, nombre, dirección y estado del pedido.
- Paginado.
- Posibilidad de filtrar los pedidos por fecha (día), estado y campo abierto (texto libre).
- Al pinchar en el pedido accederás al detalle del mismo, mostrando sus atributos.
- En el apartado de detalle de pedido, posibilidad de modificar el estado del mismo (realizar llamada a http://goi.front-challenge.s3-website-eu-west-1.amazonaws.com/[order-id], aunque fallará ya que no es editable en el backend, pero lo trataremos en front como actualizado)

Los cambios realizados no es necesario que tengan persistencia en backend. Al actualizar la página, se resetearán todos los datos, mostrando de nuevo el contenido original obtenido a través del endpoint facilitado.

## Requisitos
- Framework Vue.js
- Interfaz modular por componentes.
- Clean code.
- Hoja de estilos con Sass.
- El diseño debe de ser responsive (puede basarse en frameworks tipo bulma, materialize...).

## Bonus
- Test unitarios.
- Diseño atractivo.
- Comentarios en el código.

## Workflow
- Haz un fork de este repositorio.
- Resuelve el ejercicio.
- Comparte tu fork para la corrección.

Si tienes alguna duda, puedes contactar con nosotros en `tech@letsgoi.com`

Muchas gracias y suerte.

