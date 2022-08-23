

const express = require('express');
const bodyParser = require('body-parser');

const empController = require('../controllers/employeeController')
const empRoute =  express();
empRoute.use(bodyParser.json())
empRoute.use(bodyParser.urlencoded({extended: true}))
empRoute.set('view engine','ejs')
empRoute.set('views','./views/employees')
empRoute.get('/register',empController.loadRegister)
empRoute.post('/register',empController.addEmp);
empRoute.get('/verify',empController.verifyEmp);
empRoute.post('/verify',empController.verifyEmpPost);
module.exports = empRoute