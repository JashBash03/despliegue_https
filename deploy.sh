sudo apt update

sudo apt install nodejs cerbot

npm install

cerbot certonly --standalone -d dev2.cyberbunny.online --non-interactive --agree-tos -m javiercamarerolopez@gmail.com

cp /etc/letsencrypt/live/cyberbunny.online/fullchain.pem .
cp /etc/letsencrypt/live/cyberbunny.online/privkey.pem .