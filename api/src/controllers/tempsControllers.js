const axios = require("axios");
const {Temperaments} = require("../db.js");


const AllTemps=async()=>{
    apiPerrosCruda= (await axios.get('https://api.thedogapi.com/v1/breeds')).data
    apiPerros=Limpiar(apiPerrosCruda)
    return [...apiPerros]
}
const Limpiar=(arr)=>{
    const clearArr=arr.map((elem)=>{
            return({ 
                    nombre: elem.name,
                    temperamentos:elem.temperament,
                })
        } );
        return clearArr
}

const separarTemperamentos= (array) => {
    const temperamentos = array.map((elemento) => {
        if(elemento){
            return elemento.split(", ");
        }
    }).reduce((acumulador, elemento) => {
      return acumulador.concat(elemento);
    }, []);
    
    return [...new Set(temperamentos)];
  }


const organizar=(arr)=>{
    const str=[]
    arr.map((elem)=>{
        str.push(elem.temperamentos)
        
    })
    const a= separarTemperamentos(str)
    a.splice(117, 1);
    
    return (a)
}


const crearTemps=async(nombre )=>{
    await Temperaments.create({nombre : nombre})
}


const cargarTemps=async()=>{
    const alls= await AllTemps()
    const alls2=organizar(alls)
    alls2.map(async(elem)=>{
        await crearTemps(elem)
    })
    return alls2
    

}

module.exports ={cargarTemps}