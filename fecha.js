export default class Fecha{
    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    constructor(dia, mes, año){
        this.fechas = new Date(año,mes -1,dia)
        this.diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
        this.años = ["Enero","Febrero","Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        console.log("Objeto inicializado")
    }
    getAños(){
        let añosTranscurridos 
        añosTranscurridos = this.años 
        return `${this}`
    }
    getMeses(){

    }
    getSemanas(){

    }
    getDias(){

    }
    getFecha(){

    }
    getDiaFecha(){

    }
}