const Producto = require('../models/Producto');

exports.agregarProducto = async (req, res) => {
    try {
        let producto = new Producto(req.body)
        await producto.save();
        res.status(201).json(producto)
    } catch (error) {
        console.log(error)
        res.status(500).sed('Hubo un error al agregar el producto')
    }
}


//Función para buscar los productos
exports.buscarProductos = async (req, res) => {
    try {
        const producto = await Producto.find();
        res.json(producto);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar los productos');
    }
}

//función buscar un producto por id

exports.mostrarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).send({ msg: "producto no encontrado con ese ID" })
        } else {
            res.json(producto);
        }
    } catch (error) {
        res.status(500).send('hubo un error al mostrar el producto')
    }
}

// función modificar productos
exports.modificarProducto = async (req, res) => {
    try {
        const producto = await Producto.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!producto) {
            res.status(404).send({ msg: "producto no encontrado con ese ID" })
        } else {
            res.json(producto);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al modificar el producto')
    }
}

//funcion eliminar productos
exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ msg: "El producto no existe" })
        } else {
            await Producto.findOneAndDelete({ _id: req.params.id });
            res.json({ msg: "El producto ha sido eliminado" })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al eliminar el producto')
    }
}