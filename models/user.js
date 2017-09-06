const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const userSchema = new Schema({
    
    facebook:{
        name:{type:String},
        id:{type: String},
        token: String,
    },

    bars:[{
        type:String,
        createdAt:{type:Date, expires:'24h'}
        }],
    
})

const User = mongoose.model('User', userSchema);
module.exports = User