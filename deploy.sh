#!/bin/bash

# Actualizar el sistema
sudo apt update

# Instalar Certbot
sudo apt install -y certbot

# Obtener certificados SSL para tu dominio
sudo certbot certonly --standalone -d dev2.cyberbunny.online --non-interactive --agree-tos -m javiercamarerolopez@gmail.com

# Crear directorio para almacenar los certificados
mkdir -p message

# Copiar los certificados al directorio del proyecto
sudo cp /etc/letsencrypt/live/dev2.cyberbunny.online/privkey.pem message/
sudo cp /etc/letsencrypt/live/dev2.cyberbunny.online/fullchain.pem message/

# Configurar tarea cron para renovar certificados automáticamente
(crontab -l ; echo "0 0 * * * /usr/bin/certbot renew --quiet") | crontab -

# Clonar el repositorio
# git clone <URL_DEL_REPOSITORIO>

# Entrar en el directorio del proyecto
# cd <NOMBRE_DEL_REPOSITORIO>

# Instalar dependencias
# npm install

# Iniciar el servidor
node index.js

# Comprobar que el servidor se ha iniciado correctamente
curl -k https://dev2.cyberbunny.online:3000/