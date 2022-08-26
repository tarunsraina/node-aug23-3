
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URI as String);

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
