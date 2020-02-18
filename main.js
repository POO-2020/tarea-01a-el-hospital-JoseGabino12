import Tiempo from "./tiempo.js"
class Main{
    
    getTempo(){
        let horas = new Tiempo(11,30,"PM")
        console.log(`Son las ${horas.getFormato12()}`)
        console.log(`Son las ${horas.getFormato24()}`)

    }
}
let app = new Main()
app.getTempo()
