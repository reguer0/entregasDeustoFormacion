 interface Empleado {
    nombre: string;
    apellidos: string;
    correoElectronico: string;
    fechaNacimiento: string;
}
 class EmpleadoVentas implements Empleado {
    nombre: string;
    apellidos: string;
    correoElectronico: string;
    fechaNacimiento: string;
    _unidadVenta: string;
    _zonaGeografica: string;

    constructor(
        nombre: string,
        apellidos: string,
        correoElectronico: string,
        fechaNacimiento: string,
        unidadVenta: string,
        zonaGeografica: string
    ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correoElectronico = correoElectronico;
        this.fechaNacimiento = fechaNacimiento;
        this._unidadVenta = unidadVenta;
        this._zonaGeografica = zonaGeografica;
    }

    get unidadVenta(): string {
        return this._unidadVenta;
    }

    set unidadVenta(unidadVenta: string) {
        this._unidadVenta = unidadVenta;
    }

    get zonaGeografica(): string {
        return this._zonaGeografica;
    }   
    set zonaGeografica(zonaGeografica: string) {
        this._zonaGeografica = zonaGeografica;
    }   

}