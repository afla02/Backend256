const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// estas son las rutas de nuestro crud
router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id',clienteController.mostrarClientes);
//router.patch('/:id',clienteController.actualizarCliente);
router.put('/:id',clienteController.modificarClientes);
router.delete('/:id', clienteController.eliminarClientes);

module.exports = router;