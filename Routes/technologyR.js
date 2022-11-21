const express= require('express');
const app = express();
const dataT = require("../Controllers/technologyC");



const dataRouterT = express.Router()
dataRouterT.route('/technologyR')
app.get(dataT.technologyData)

module.exports=dataRouterT;