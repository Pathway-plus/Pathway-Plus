// module imports
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

// model imports
const {Consultant, Session} = require('./models/consultationModels')
const {Volunteer, Role, Department} = require('./models/volunteerModels')

// connect Mongo
const DB_URI = "mongodb+srv://Thuta:vaporvoid@pathway.r8ixab3.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB_URI)

// init app
const app = express()
app.listen(3000, ()=>{
    console.log("::: Server running on localhost:3000")
})

// middlewares
app.use(express.json())
app.use(cors())







// consultant routes
// later refactor with express.Router()

app.get('/consultant/all', async (req,res)=>{
    let allConsultants = await Consultant.find()
    res.json(allConsultants)
})

app.get('/consultant/:id', async (req,res)=>{
    let consultantDetails;
    try{
        consultantDetails = await Consultant.where("_id").equals(req.params.id)
    } catch(err) {
        consultantDetails = null
        res.status(404)
    }
    res.json(consultantDetails)
})

app.get('/consultant/:id/sessions', async (req,res)=>{
    let consultantSessions;
    try{
        consultantSessions = await Session.where("consultant").equals(req.params.id)
    } catch(err) {
        consultantSessions = {
            "error" : "consultant not found"
        }
        res.status(404)
    }
    res.json(consultantSessions)
})


// sample reqest body
// {
//     "name" : "Rebecca",
//     "profile" : "https://profile.com/x.png",
//     "country" : "Japan",
//     "university" : "Arasaka University",
//     "major" : "Cybernetics",
//     "year" : "Sophomore",
//     "introduction" : "Some Boring blah blah blah.",
//     "type" : "Public"
// }
app.post('/consultant/create', async (req,res)=>{
    let createdConsultant = await Consultant.create(req.body)
    res.json(createdConsultant)
})

app.delete('/consultant/delete/:id', async (req,res)=>{
    let deletedConsultant = await Consultant.deleteOne({_id:req.params.id})
    res.json(deletedConsultant)
})







// session routes
// later refactor with express.Router()

app.get('/session/all', async (req,res)=>{
    let allSessions = await Session.find()
    res.json(allSessions)
})


// sample reqest body
// {
//     "date" : "2006-01-01T17:30:00.000Z",
//     "startTime" : ["4:00", "PM"],
//     "endTime" : ["4:30", "PM"],
//     "consultant" : "634309adb5afa7ed5784a7c2"
// }
app.post('/session/create', async (req,res)=>{
    let createdSession = await Session.create(req.body)
    res.json(createdSession)
})

app.delete('/session/delete/:id', async (req,res)=>{
    let deletedSession = await Session.deleteOne({_id:req.params.id})
    res.json(deletedSession)
})









// volunteer routes
// later refactor with express.Router()

app.get('/volunteer/all', async (req,res)=>{
    let allVols = await Volunteer.find().populate("role","-_id -__v").populate("department","-_id -__v")
    res.json(allVols)
})


// smaple request body
// {
//     "name" : "Denji",
//     "role" : "Visual Designer",
//     "department" : "Creative",
//     "duration" : "3 months"
// }

app.post('/volunteer/create', async (req,res)=>{
    let dep = await Department.exists({ name : `${req.body["department"]}` })
    let rol = await Role.exists({ name : `${req.body["role"]}` })

    let resultDep;
    if (dep == null){
        resultDep = await Department.create({name:`${req.body["department"]}`})
    }else{
        resultDep = await Department.findOne({name:`${req.body["department"]}`})
    }
    req.body["department"] = resultDep["_id"]
    
    let resultRol;
    if (rol == null){
        resultRol = await Role.create({name:`${req.body["role"]}`})
    }else{
        resultRol = await Role.findOne({name:`${req.body["role"]}`})
    }
    req.body["role"] = resultRol["_id"]
    
    let createdVol = await Volunteer.create(req.body)
    res.json(createdVol)
})


app.delete('/volunteer/delete/:id', async (req,res)=>{
    let deletedVol = await Volunteer.deleteOne({_id:req.params.id})
    res.json(deletedVol)
})