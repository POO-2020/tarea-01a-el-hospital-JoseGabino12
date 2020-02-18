import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"

class Main{
    constructor(){
         this.horas = new Tiempo(11,30,"PM")
         this.fechas = new Fecha(30,2,2001)

    }
    getTempo(){
        console.log(`Son las ${horas.getFormato12()}`)
        console.log(`Son las ${horas.getFormato24()}`)

    }
    getFecha(){
        console.log(`Año ${this.fechas.getAños()}`)
    }
}
let app = new Main()
app.getFecha()
