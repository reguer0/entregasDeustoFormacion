

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


