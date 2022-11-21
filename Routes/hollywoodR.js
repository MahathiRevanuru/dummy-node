const express= require('express');
const app = express();
const dataC = require("../Controllers/HollywoodC");



const dataRouterC = express.Router()
dataRouterC.route('/HollywoodR')
app.get(dataC.hollywoodData)

module.exports=dataRouterC;