const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');
const { validarCamposCliente } = require('../middlewares/validacaoMiddleware');

router.get('/', clientesController.getAllClientes);

router.get('/:id', clientesController.getClienteById);

router.post('/', validarCamposCliente, clientesController.createCliente);

router.put('/:id', validarCamposCliente, clientesController.updateCliente);

router.delete('/:id', clientesController.deleteCliente);

module.exports = router;
