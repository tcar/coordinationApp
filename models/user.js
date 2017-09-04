const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const userSchema = new Schema({
    
    facebook:{
        name:{type:String},
        id:{type: String},
        token: String,
    },

    bars:[{
        type:Schema.Types.ObjectId, ref:'Bar'
        }]
    
})

const User = mongoose.model('User', userSchema);
module.exports = User