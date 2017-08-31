const mongoose = require('mongoose')

const Schema = mongoose.Schema

const barSchema = new Schema({
    name: String,
    id:String,
    location:String,
    going:{
        type:Number,
        default:0
    },
    users:[{
        type:Schema.Types.ObjectId, ref:'User'
    }]
})


const Bar = mongoose.model('Bar', barSchema)

module.exports = Bar