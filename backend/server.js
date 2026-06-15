const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Volunteer = require('./volunteerSchema')
const cors = require('cors')
const router = express.Router()
const dotenv = require('dotenv').config()
app.use(express.json())
app.use(cors());

mongoose.connect(process.env.dbconn)
.then(()=>{
console.log("mongodb connected successfully")
})
.catch((err)=>{
console.log(err)
})

//store volunteers data in database
app.post("/volunteer",async (req,res)=>{
  const volunteer = new Volunteer({
    fullName : req.body.fullName,
    email : req.body.email,
    phoneNumber : req.body.phoneNumber,
    gender : req.body.gender,
    age : req.body.age,
    address : req.body.address,
    skills : req.body.skills,
    areaOfInterest : req.body.areaOfInterest,
    availability : req.body.availability,
    preferredLocation : req.body.preferredLocation
  })

  await volunteer.save()
  res.send("volunteers data is saved successfully")
})

app.get("/volunteer-get",async (req,res)=>{
  const volunteers = await Volunteer.find()
  res.json(volunteers)
})


app.listen(3000,()=>{
console.log("server is created")
})