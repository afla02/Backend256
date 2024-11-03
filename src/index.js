const express = require('express')
const conectarBD = require('../config/db');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

conectarBD();
app.use(cors());
app.use(express.json());

//ruta principal del proyecto
app.use('/api/cliente', require ('../routes/rutas'));
app.use('/api/producto', require ('../routes/rutasProductos'));


app.get('/',(req,res) => {
    res.send('Hola mundo desde la web');
});

app.listen(port,() => {
    console.log('El servidor esta conectado http://localhost:5000/');
});