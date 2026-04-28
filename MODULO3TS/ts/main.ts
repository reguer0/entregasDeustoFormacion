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

function addEmployee(){
    let employeeName = (<HTMLInputElement>document.getElementById('name')).value;
    let surname = (<HTMLInputElement>document.getElementById('surname')).value;
    let email = (<HTMLInputElement>document.getElementById('email')).value;
    let birthDate = (<HTMLInputElement>document.getElementById('birthDate')).value;
    let sdUnit = (<HTMLInputElement>document.getElementById('sdUnit')).value;
    let area = (<HTMLInputElement>document.getElementById('area')).value;

    const empleado = new EmpleadoVentas(employeeName, surname, email, birthDate, sdUnit, area);

    console.log(`
        Empleado agregado: ${empleado.nombre} ${empleado.apellidos},
        correo: ${empleado.correoElectronico},
        fecha de nacimiento: ${empleado.fechaNacimiento}, 
        unidad de venta: ${empleado.unidadVenta}, 
        zona geográfica: ${empleado.zonaGeografica}`);
}


