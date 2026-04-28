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
//# sourceMappingURL=empleado.js.map