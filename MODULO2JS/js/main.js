const obtenerDatos =() =>{
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let points = document.getElementById('points').value;    
    return [name, surname, points];
};

const checkDatos = () => {
    const aDatosFormulario = obtenerDatos();
    return aDatosFormulario.every(dato => dato.trim() !== '') ? true : false; 
}

const crearMensaje = () => {   
    const datosAlumno = obtenerDatos();
    return new Promise((resolve, reject) => {
        setTimeout(() => {                                 
           if(!checkDatos() ){
            reject('Error: Todos los campos deben ser completados');
            return;
           }
            const alumno = new Alumno(...datosAlumno);
            const mensaje = ` EL ALUMNO ${alumno.nombre} ${alumno.apellidos} ES  ${alumno.getPuntos()}`;
            resolve( mensaje);
        }, 2000);
    });
}

 async function showUserResult() {    
    try {   
        const mensaje = await crearMensaje();
        console.log(mensaje);   
    } catch (error) {
        console.error(error);
    }
}




