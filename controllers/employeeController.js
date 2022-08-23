
const Emp = require('../Models/employeeModel')
const Employee = require('../Models/employeeModel');
const loadRegister = async(req,res)=>{
    try{
        res.render('registration')
    }catch(e){
        console.log(e.message)
    }
}

const addEmp = async(req,res)=>{
    try{
        const emp = Emp({
            name : req.body.name,
            email : req.body.email,
            mobile : req.body.mobile,
        })

        const empData = await emp.save();

        if(empData){
            res.render('registration',{message:"Registration successful"})
        }else{
            res.render('registration',{message:"Registration failed"})
        }
    }catch(error){
        console.log("error :"+error);
    }
}

const verifyEmp = (req,res)=>{
    try{
        res.render('verifyEmp')
    }catch(e){
        console.log(e);
    }
}

const verifyEmpPost = (req,res)=>{
    console.log("this is called");
    try{
        let name = req.body.regname;
        if(Employee.find({name:name})){
            res.render('userFound')
        }else{
            res.render('NoUser')
        }
    

         
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    loadRegister,addEmp,verifyEmp,verifyEmpPost
}