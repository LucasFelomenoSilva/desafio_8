const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');
const { validarCamposProduto } = require('../middlewares/validacaoMiddleware');

router.get('/', produtosController.getAllProdutos);

router.get('/:id', produtosController.getProdutoById);

router.post('/', validarCamposProduto, produtosController.createProduto);

router.put('/:id', validarCamposProduto, produtosController.updateProduto);

router.delete('/:id', produtosController.deleteProduto);

module.exports = router;
