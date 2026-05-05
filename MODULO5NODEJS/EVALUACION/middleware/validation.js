const validarApellido = (req, res, next) => {
    const {apellido} = req.params;
    const tieneNumeros = /\d/.test(apellido);

    if (tieneNumeros) {
        return res.status(400).json({ error: "El apellido no debe contener números" });
    }

    next();
}

module.exports = {
    validarApellido
}