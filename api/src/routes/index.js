const { Router } = require('express');
const dogRouter = require("./dogsRouter");
const landingRouter = require('./landingRouter');
const tempRouter =require("./tempRouter")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", landingRouter);
router.use("/dogs", dogRouter);
router.use("/temperaments", tempRouter);

module.exports = router;
