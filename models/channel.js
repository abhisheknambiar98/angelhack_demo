//const express =require('express')
const mongoose= require('mongoose')

const schema=mongoose.Schema({
    latitude:{
        type: Number
    },
    longitude:{
        type: Number
    },
    counter:{
        type:Number
    }

})

module.exports= mongoose.model('data_schema',schema)