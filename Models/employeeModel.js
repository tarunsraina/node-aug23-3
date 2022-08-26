
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URI as String ||'mongodb+srv://tarun:blacy728@tarun-cluster.2sk5aum.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log("mongo sucesss")).catch((err)=>console.log("error:"+err));

const employee = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required  : true
    }
})


const Employee = mongoose.model("Employee",employee);

module.exports = Employee;
