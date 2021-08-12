const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')


router.get('/', async(req,res) => {
    try{
           const employees = await Employee.find()
           res.json(employees)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const employee = await Employee.findById(req.params.id)
           res.json(employee)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const employee = new Employee({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        department: req.body.department
    })

    try{
        const a1 =  await employee.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const employee = await Employee.findById(req.params.id) 
        employee.department = req.body.department
        const a1 = await employee.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        const employee = await Employee.findById(req.params.id) 
        employee.department = req.body.department
        const a1 = await employee.delete()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router