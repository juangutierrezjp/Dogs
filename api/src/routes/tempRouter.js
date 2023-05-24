const { Router } = require('express');
const tempRouter=Router()
const {getTemps} = require("../handlers/tempsHandler")


tempRouter.get("/",getTemps)

module.exports=tempRouter;