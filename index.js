const express = require('express');
const app = express();

const data0 = require("./Routes/bollywoodR")
const data1 = require ("./Routes/hollywoodR")
const data2 = require("./Routes/fitnessR")
const data3 = require("./Routes/technologyR")
const data4 = require("./Routes/foodR")

app.use('/bollywood', data0)
app.use('/hollywood',data1)
app.use('/fitness',data2)
app.use('/technology',data3)
app.use('/food',data4)
app.listen(process.env.PORT||8000 ,()=>{
    console.log("server running");
})