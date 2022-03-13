const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res, next) => {
	res.status(200).send({
		mensagem: 'Ok, Deu Certo!'
	});
});

const rotaProdutos = require('./routes/produtos');
app.use('/produtos', rotaProdutos);

app.use((req, res, next)=>{
	const error = new Error('Página Não Encontrada.');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next)=>{
	res.status(error.status || 500);
	return res.send({
		erro: {
			mensagem: error.message
		}
	});
});

module.exports = app; //enviar para outras paginas