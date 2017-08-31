const mongoose = require('mongoose')

const Schema = mongoose.Schema

const barSchema = new Schema({
    name: String,
    id:String,
    going:Number,
    users:[{
        type:Schema.Types.ObjectId, ref:'User'
    }]
})


const Bar = mongoose.model('Bar', barSchema)

module.exports = Bar