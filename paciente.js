import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Paciente{
    /**
     * 
     * @param {number} telefono 
     */
    constructor(telefono){
        this.nombres = new Nombre("José Gabino", "Morales", "González")
        this.fechas = new Fecha(30,5,2001)
        this.telefonos = telefono
    }
    getPerfil(){
        return `${this.nombres.getNombreCompleto()}, ${this.fechas.getFecha()}, ${this.telefonos}`
    }
}