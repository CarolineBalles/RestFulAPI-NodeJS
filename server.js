const http = require('http');
const app = require('./app'); //enviado no app.js export
const port = process.env.PORT || 3000;
const url = `http://localhost/${port}`;
const server = http.createServer(app);
server.listen(port, () => {
	console.log(`Servidor Rodando na url: ${url}`)

});