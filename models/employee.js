const mongoose = require('mongoose')


const employeeSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
   lastname: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true,
        default:"not assigned"
    }

})

module.exports = mongoose.model('Employee',employeeSchema)