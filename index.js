const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


app.get("/home", (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/about", (req,res)=>{
    res.sendFile(__dirname+"/about.html")
})

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/register.html")
})

app.get("/student",(req,res)=>{
    res.sendFile(__dirname+"/student.html")
})

app.get("/driver",(req,res)=>{
    res.sendFile(__dirname+"/driver.html")
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("==> server is running on port 3000");
})