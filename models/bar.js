const mongoose = require('mongoose')

const Schema = mongoose.Schema

const barSchema = new Schema({
    name: String,
    id:String,
    location:{
        type:String,
        lowercase:true
        },
    going:{
        type:Boolean,
        default:false
    },
    users:[{
        type:Schema.Types.ObjectId, ref:'User'
    }]
})


const Bar = mongoose.model('Bar', barSchema)

module.exports = Bar