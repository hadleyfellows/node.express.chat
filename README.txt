README

npm install -g express (globally install express)
express --ejs <app/project name>
cd <app/poject>
npm install
npm install express.io






// IO /SOCKET STUFF

Server to client
app.io.broadcast --> all clients
req.io.broadcast --> all but the one

Client to server
io.emit --> app.io.route() -->  req.io.emit  --> io.on()
