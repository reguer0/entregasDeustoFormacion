"use strict";
class EmpleadoVentas {
    nombre;
    apellidos;
    correoElectronico;
    fechaNacimiento;
    _unidadVenta;
    _zonaGeografica;
    constructor(nombre, apellidos, correoElectronico, fechaNacimiento, unidadVenta, zonaGeografica) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correoElectronico = correoElectronico;
        this.fechaNacimiento = fechaNacimiento;
        this._unidadVenta = unidadVenta;
        this._zonaGeografica = zonaGeografica;
    }
    get unidadVenta() {
        return this._unidadVenta;
    }
    set unidadVenta(unidadVenta) {
        this._unidadVenta = unidadVenta;
    }
    get zonaGeografica() {
        return this._zonaGeografica;
    }
    set zonaGeografica(zonaGeografica) {
        this._zonaGeografica = zonaGeografica;
    }
}
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