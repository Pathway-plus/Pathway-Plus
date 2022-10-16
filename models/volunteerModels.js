const mongoose = require('mongoose');

// schemas
const roleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})


const volunteerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "role",
        required: true
    },
    department: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "department",
        required: true
    },
    duration: {
        type: String,
        required: true
    }
})


// models
let Volunteer = mongoose.model('volunteer', volunteerSchema);
let Role = mongoose.model('role', roleSchema);
let Department = mongoose.model('department', departmentSchema);


// exports
module.exports = {
    Volunteer,
    Role,
    Department
}
