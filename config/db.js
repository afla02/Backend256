const mongoose = require('mongoose')
require('dotenv').config();

const conectarBD = () =>{
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('Estamos conectados con mongo'))
    .catch((err) => console.error(err));
}

module.exports = conectarBD;