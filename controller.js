const User = require('./models/user')
const Bar = require('./models/bar')
const passport = require('passport')
const auth = require('./auth/credentials')
const yelp = require('yelp-fusion')
module.exports = {

getBars:async (req,res,next)=>{
    	try{
            const clientId = auth.yelp.id
            const clientSecret = auth.yelp.secret  
            const result = await yelp.accessToken(clientId, clientSecret)
            const token = result.jsonBody.access_token
            const client = yelp.client(token);

            const result = await client.search({
                limit:10,
                categories:'bars',
                location: req.body.location
                })
            const bars = result.jsonBody.businesses
            bars.map((bar)=>{

            })
        }catch(err){
            res.send(err)
            }
},

getUsers: async (req,res,next)=>{
    try{
       const users = await User.find({})
       res.send(users)
    }catch(err){
        res.send(err)
    }
},

deleteUsers: async (req,res,next)=>{
    try{
       const users = await User.remove({})
       res.send(users)
    }catch(err){
        res.send(err)
    }
},
login :async (req,res,next)=>{ 
    console.log(req.user)
 res.redirect('/');

},

isAuthenticated: async(req,res,next)=>{
    if(req.user){
        next()
    }else{
        res.send('you need authenticate')
}
},
toggle_going: async (req,res,next)=>{
    const userid = req.body.userid
    const barid = req.body.barid
    const user = await User.findOne({'facebook.id':userid})

    console.log(user)



}


}