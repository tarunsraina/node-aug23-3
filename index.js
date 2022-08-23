

const express = require('express');

const app = express()

const PORT = process.env.PORT || 3000

//for user routes
const empRoute = require('./routes/employeeRoutes')
app.use('/',empRoute)


app.get('/',(req,res)=>{
    res.send('hiii')
})
app.listen(PORT,()=>console.log('started....'))