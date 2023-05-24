const { Router } = require('express');
const landingRouter=Router()


landingRouter.get("/", (req,res)=>{
    res.send("estoy en el landing");
})

module.exports=landingRouter;