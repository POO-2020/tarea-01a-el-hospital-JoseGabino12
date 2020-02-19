import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"

class Main{
    constructor(){
         this.horas = new Tiempo(11,30,"PM")
         this.fechas = new Fecha(30,4,2001)

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

    }
}
let app = new Main()
app.getFecha()
