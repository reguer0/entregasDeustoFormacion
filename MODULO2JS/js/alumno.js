class Alumno {

    constructor(nombre, apellidos, puntos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.puntos = puntos;
    }
    
    setPuntos(puntos) {
        this.puntos = puntos;
    }

    getPuntos() {
        return this.puntos >= 5 ? "Apto" : "No apto";           
    }
 
}