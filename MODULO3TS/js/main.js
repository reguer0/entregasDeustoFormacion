"use strict";
function addEmployee() {
    let employeeName = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let birthDate = document.getElementById('birthDate').value;
    let sdUnit = document.getElementById('sdUnit').value;
    let area = document.getElementById('area').value;
    const empleado = new EmpleadoVentas(employeeName, surname, email, birthDate, sdUnit, area);
    console.log(`
        Empleado agregado: ${empleado.nombre} ${empleado.apellidos},
        correo: ${empleado.correoElectronico},
        fecha de nacimiento: ${empleado.fechaNacimiento}, 
        unidad de venta: ${empleado.unidadVenta}, 
        zona geográfica: ${empleado.zonaGeografica}`);
}
//# sourceMappingURL=main.js.map