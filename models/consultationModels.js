const mongoose = require('mongoose');

// schemas
const consultantSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    profile : {
        type: String
    },
    country: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    introduction: {
        type: String
    },
    type: {
        type : String,
        default : "Private"
    }
})

const sessionSchema = mongoose.Schema({
    date : {
        type: Date,
        required: true
    },
    startTime: {
        type: [String],
        required: true
    },
    endTime: {
        type: [String],
        required: true
    },
    is_available: {
        type: Boolean,
        default: true
    },
    consultant: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "consultant",
        required: true
    },
    weekly: {
        type: Boolean,
        default: false
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
