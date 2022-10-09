// module imports
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

// model imports
const {Consultant, Session} = require('./models/consultationModels')

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


// sample reqest body
// {
//     "name" : "Rebecca",
//     "profile" : "https://profile.com/x.png",
//     "country" : "Japan",
//     "university" : "Arasaka University",
//     "specialization" : "Cybernetics",
//     "year" : "Sophomore",
//     "introduction" : "Some Boring blah blah blah."
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
//     "is_available" : true,
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