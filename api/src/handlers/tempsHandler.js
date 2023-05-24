const{ cargarTemps }=require("../controllers/tempsControllers")


const getTemps = async (req, res)=>{
    try {
        const cargados =await cargarTemps();
        res.status(201).json(cargados)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={getTemps}