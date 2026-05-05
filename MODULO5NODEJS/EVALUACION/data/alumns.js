const alumnos = [
  { id: 1, nombre: "Laura", apellido: "García" },
  { id: 2, nombre: "Carlos", apellido: "Martínez" },
  { id: 3, nombre: "Sofía", apellido: "López" },
  { id: 4, nombre: "Diego", apellido: "Sánchez" },
  { id: 5, nombre: "Valentina", apellido: "Fernández" },
  { id: 6, nombre: "Mateo", apellido: "González" },
  { id: 7, nombre: "Isabel", apellido: "Rodríguez" },
  { id: 8, nombre: "Pablo", apellido: "Pérez" },
  { id: 9, nombre: "Ana", apellido: "Torres" },
  { id: 10, nombre: "Javier", apellido: "Ruiz" }
];


 const getAlumnoPorApellido = (apellido) => {
    return alumnos.find(alumno => alumno.apellido.toLowerCase() === apellido.toLowerCase());
}

module.exports = {
    buscarPorApellido: getAlumnoPorApellido
}