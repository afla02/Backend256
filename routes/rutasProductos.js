const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/', productoController.agregarProducto);
router.get('/', productoController.buscarProductos);
router.get('/:id',productoController.mostrarProducto);
router.put('/:id',productoController.modificarProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;