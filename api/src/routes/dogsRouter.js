const { Router } = require('express');
const dogRouter=Router()
const { getDogs, getDogbyId, postDogs}=require('../handlers/dogHandler')


dogRouter.get("/", getDogs)
dogRouter.get("/:id", getDogbyId)
dogRouter.post("/",postDogs)

module.exports=dogRouter;