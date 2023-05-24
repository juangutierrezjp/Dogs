const { creaPerro, buscaPerroid, AllPerros, buscaPerroQuery } = require("../controllers/dogsControllers");

const getDogs = async (req, res)=>{
    const {name} = req.query;
    try {
        console.log(name)
    const resultado =name ? await buscaPerroQuery(name): await AllPerros();
        res.status(200).json(resultado)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

const getDogbyId = async(req, res)=>{
    const {id}=req.params; 
    const source = isNaN(id)?"bdd":"api"
try {
    const perrito= await buscaPerroid(id,source);
   
    res.status(200).json(perrito);
} catch (error) {
    res.status(400).json({error: error.message})
}}



const postDogs = async (req, res)=>{
    try {
        const {imagen, nombre,altura,peso,temperamentos,esperanzaDeVida }=req.body
        const newDog= await creaPerro(imagen, nombre,altura,peso,temperamentos,esperanzaDeVida);
        res.status(201).json(`exelente, se ha guardado ${newDog}`)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports ={
    getDogs,
    getDogbyId,
    postDogs,
}