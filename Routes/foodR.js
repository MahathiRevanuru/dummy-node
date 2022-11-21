const express= require('express');
const app = express();
const dataF = require("../Controllers/foodC");



const dataRouterF = express.Router()
dataRouterF.route('/foodR')
app.get(dataF.foodData)

module.exports=dataRouterF;