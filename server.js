const express = require('express')
const app= express()
const mongoose =require('mongoose')
//const cors= require('cors')
app.set('view engine','ejs')

//app.use(static('static'))

app.get('/',(requestAnimationFrame,res)=>{
    res.render('main.ejs')
})
app.listen(3000,()=>{
    console.log("Logged into port 3000")
})