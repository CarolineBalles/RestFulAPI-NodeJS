const express = require('express');
const router = express.Router();

//retorna todos os produtos
router.get('/', (req, res, next)=>{
	res.status(200).send({
		mensagem: 'Retorna Todos Os Produtos.'
	});
});

//insere no banco 1 novo produto
router.post('/', (req, res, next)=>{
	res.status(201).send({
		mensagem: 'Um novo Foi Produto Criado Com Sucesso.'
	});
});

//retorna um produto especifico pelo id
router.get('/:id_produto', (req, res, next)=>{
	const id = req.params.id_produto
	res.status(200).send({
		mensagem: 'Retorna Um Produto Específico Pelo Número De Id.',
		id: id
	});
});

//altera os dados de 1 produto no banco
router.patch('/:id_produto', (req, res, next)=>{
	const id = req.params.id_produto
	res.status(201).send({
		mensagem: 'O Produto Foi Alterado Com Sucesso.',
		id: id
	});
});

//deleta um produto no banco
router.delete('/:id_produto', (req, res, next)=>{
	const id = req.params.id_produto
	res.status(201).send({
		mensagem: 'O Produto Foi Excluído Com Sucesso.',
		id: id
	});
});



module.exports = router;