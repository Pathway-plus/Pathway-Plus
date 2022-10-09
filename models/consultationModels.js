const mongoose = require('mongoose');

// schemas
const consultantSchema = mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    profile : {
        type: String
    },
    country: {
        type: String,
        require: true
    },
    university: {
        type: String,
        require: true
    },
    specialization: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    introduction: {
        type: String
    }
})

const sessionSchema = mongoose.Schema({
    date : {
        type: Date,
        require: true
    },
    startTime: {
        type: [String],
        require: true
    },
    endTime: {
        type: [String],
        require: true
    },
    is_available: {
        type: Boolean,
        require: true,
        default: true
    },
    consultant: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "consultant",
        require: true
    }
})


// models
let Consultant = mongoose.model('consultant', consultantSchema);
let Session = mongoose.model('session', sessionSchema);


// exports
module.exports = {
    Consultant, 
    Session
}
