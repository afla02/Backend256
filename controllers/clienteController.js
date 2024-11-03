const Cliente = require('../models/Cliente');

//Función para buscar clientes
exports.buscarClientes = async (req, res) => {
    try {
        const cliente = await Cliente.find();
        res.json( cliente ); // {}Sirve para mostrar el arreglo de cliente
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar los clientes');
    }
}

//Fución para agregar clientes
exports.agregarClientes = async (req, res) => {
    try {
        let cliente = new Cliente(req.body);
        await cliente.save();
        res.json(cliente);
        console.log(cliente);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un cliente')
    }
}
//función buscar un cliente por id

exports.mostrarClientes = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).send({ msg: "cliente no encontrado con ese ID" })
        } else {
            res.json(cliente);
        }
    } catch (error) {
        res.status(500).send('hubo un error al mostrar un cliente')
    }
}

//función actualizar clientes

exports.actualizarCliente = async (req, res) => {
    let cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    try {
        if (!cliente) {
            res.status(404).send({ msg: "cliente no encontrado con ese ID" })
        } else {
            res.json(cliente);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al actualizar los cliente')
    }
}

// función modificar clientes
exports.modificarClientes = async (req, res) => {
    try {
        const cliente = await Cliente.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!cliente) {
            res.status(404).send({ msg: "cliente no encontrado con ese ID" })
        } else {
            res.json(cliente);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al modificar los cliente')
    }
}

//funcion eliminar clientes
exports.eliminarClientes = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({ msg: "El cliente no existe" })
        } else {
            await Cliente.findOneAndDelete({ _id: req.params.id });
            res.json({ msg: "El cliente ha sido eliminado" })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al eliminar un cliente')
    }
}