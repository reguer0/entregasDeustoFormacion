const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());

const devicesRoutes = require('./routes/devices');
app.use('/devices', devicesRoutes);

const mongoURI = 'mongodb://localhost:27017/deutoFormacion';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('✅ Conectado a MongoDB correctamente');
    })
    .catch(err => {
        console.log('❌ Error al conectar con MongoDB:', err);
    });

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});