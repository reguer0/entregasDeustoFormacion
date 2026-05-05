const { buscarPorApellido } = require("./data/alumns"); 
const {validarApellido} = require("./middleware/validation");

const express = require("express");
const app = express();
const PORT = 3000;


app.get("/alumnos/:apellido",validarApellido, (req, res) => {   
    const { apellido } = req.params;
    const alumno = buscarPorApellido(apellido);
    res.json(alumno);

});    

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});