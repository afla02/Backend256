const mongoose = require('mongoose')
const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true,
        default: 0
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    estado: {
        type: String,
        enum: ['disponible', 'agotado', 'descontinuado'],
        default: 'disponible'
    },
}, { versionKey: false });

module.exports = mongoose.model('Producto', productoSchema);