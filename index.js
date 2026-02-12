require('dotenv').config()
const express = require("express")


const app = express()

const PORT = 4000

app.get("/",(req,res)=>{
    res.send("this is home page")
})

app.get("/login",(req,res)=>{
    res.send("this is login page")
})

app.get("/signup",(req,res)=>{
    res.send("this is a sign up page")
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`my app is listening on port ${PORT}`)
})