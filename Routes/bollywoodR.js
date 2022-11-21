const express= require('express');
const app = express();

const dataB = require("../Controllers/bollywoodC");



const dataRouterB = express.Router()
dataRouterB.route('/bollywoodR').get(dataB.bollywoodData)

module.exports=dataRouterB;