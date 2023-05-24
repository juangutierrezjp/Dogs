const  axios = require("axios");
const {Dog} = require("../db.js");
const{Temperaments} = require("../db.js")

const Limpiar=(arr)=>{
    const clearArr=arr.map((elem)=>{
        let cadena = elem.life_span;
        let nuevaCadena = cadena.replace(/ years/g, "")
            return{ 
                id: elem.id,
                nombre: elem.name,
                imagen: elem.image.url,
                altura: elem.height.metric,
                peso: elem.weight.metric,
                temperamentos:elem.temperament,
                esperanzaDeVida: nuevaCadena,
                creado:false
            }
        } );
        return clearArr
}


const buscaPerroid = async(id)=>{
    const perros=await AllPerros()
    var res=undefined
    perros.map((perro)=>{
        if(perro.id==id){
            res=perro
        }
    })
    return(res)
}

const AllPerros=async()=>{
    databasePerros=await Dog.findAll();  
    apiPerrosCruda= (await axios.get('https://api.thedogapi.com/v1/breeds')).data
    apiPerros=Limpiar(apiPerrosCruda)
    return [...databasePerros, ...apiPerros]
    
}

const buscaPerroQuery= async(name)=>{
    const todos=await AllPerros()
    const todos2=todos
    var PerroFilt=[]
    todos2.map((perro)=>{
        perro.nombre=perro.nombre.toLowerCase()
    })


    todos2.map( (elem)=>{
        if(elem.nombre.includes(name)){
            PerroFilt.push(elem)
        }
    })
    if(PerroFilt.length==0){
        return "nada de perros"
    }else{
        return PerroFilt
    }
    
}

const creaPerro=async(imagen, nombre,altura,peso,temperamentos,esperanzaDeVida)=>{
    const newDog = await Dog.create({
        imagen, nombre,altura,peso,temperamentos,esperanzaDeVida
    })
        var cont=0
        const temps=temperamentos.split(", ")
        console.log(temps)
        for(i=0; i>temps.length; i++){
            const temper= await Temperaments.findOne({were : {nombre: temps[i]}})
            console.log(cont," oka ",temps[i], temper.dataValues.nombre, temper.dataValues.id )
            await newDog.addTemperaments(temper)
            console.log("ok", temper.dataValues.id)
        }
            ;
    return {
        imagen:imagen,
        nombre:nombre,
        altura:altura,
        peso:peso,
        temperamentos:temperamentos,
        esperanzaDeVida:esperanzaDeVida
    }

}

module.exports= {creaPerro, buscaPerroid, AllPerros, buscaPerroQuery};