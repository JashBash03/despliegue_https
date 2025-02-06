# Despliegue HTTPS

En esta práctica vamos a desplegar un servidor web básico y nos aseguraremos de configurar una conexión segura HTTPS.

## Crear un servidor web básico

El servidor tendrá dos endpoints:

- `GET /` que devoloverá un mensaje de bienvenida.
- `GET /messages` este endpoint devolverá los mensajes almacenados en la base de datos.
- `POST /messages` este endpoint permitirá añadir un mensaje a la base de datos.

Ambos endpoints `GET /messages` y `POST /messages` esperan una `APIKEY` en la cabecera de la petición. Si la `APIKEY` no es correcta, el servidor devolverá un error `401 Unauthorize`.

La `APIKEY` inicialmente irá hardcodeada en el servidor.

# Despliegue HTTP

Una vez tengas la aplicación funcionando, conéctate a tu VPS, clona el repositorio y despliega la aplicacion.