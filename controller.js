const User = require('./models/user')

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

            const rez = await client.search({
                limit:10,
                categories:'bars',
                location: req.body.location
                })
               
            const bars = rez.jsonBody.businesses
         
   
        
            res.send(bars)
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
    
    req.session.save()
res.redirect('/login/' + req.user.facebook.token)

},

isAuthenticated: async(req,res,next)=>{
    if(req.user){

        next()
    }else{
        console.log('you need authenticate')
}
},
toggle_going: async (req,res,next)=>{
   

   const userid = req.user._id
    const barid = req.body.barid
  
    const user = await User.findOne({_id:userid})
    console.log(barid)
   const havit = user.bars.includes(barid)

console.log(havit)
if(havit){
  user.bars = user.bars.filter((bar)=>{
       return bar!==barid
    
   })
      await user.save()
   console.log(user.bars)
   res.send(user.bars)

}else{
user.bars.push(barid)
 await user.save()
 res.send(user.bars)
}



},

getUser: async (req,res,next)=>{
    try{
      if(req.user){
          const user = await User.findOne({_id:req.user._id})
          res.send(user)
      }else{
          res.send(false)
      }
       
    }catch(err){
        res.send(err)
    }
},

logout: async (req,res,next)=>{
    try{ 
       req.logout();
      console.log(req.user)
  res.redirect('/');
    }catch(err){
        res.send(err)
    }
},


}

