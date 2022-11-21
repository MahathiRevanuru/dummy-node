const express= require('express');
const app = express();
const dataE = require("../Controllers/fitnessC");



const dataRouterE = express.Router()
dataRouterE.route('/fitnessR')
app.get(dataE.fitnessData)

module.exports=dataRouterE;