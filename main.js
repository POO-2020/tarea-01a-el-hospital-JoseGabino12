import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Nombre from "./nombre.js"

class Main{
    constructor(){
         this.horas = new Tiempo(11,30,"PM")
         this.fechas = new Fecha(30,4,2001)
         this.nombres = new Nombre("José Gabino", "Morales", "González")

    }
    getTempo(){
        console.log(`Son las ${horas.getFormato12()}`)
        console.log(`Son las ${horas.getFormato24()}`)

    }
    getFecha(){
        console.log(`Año ${this.fechas.getAños()}`)
        console.log(`Meses ${this.fechas.getMeses()}`)
        console.log(`Semanas ${this.fechas.getSemanas()}`)
        console.log(`Días ${this.fechas.getDias()}`)
        console.log(`Fecha ${this.fechas.getFecha()}`)
        console.log(`Día ${this.fechas.getDiaFecha()}`)
    }
    getNombre(){
        console.log(`Nombre ${this.nombres.getNombreCompleto()}`)
        console.log(`Nombre ${this.nombres.getApellidoNombre()}`)
        console.log(`Iniciales ${this.nombres.getIniciales()}`)
    }
}
let app = new Main()
app.getNombre()
