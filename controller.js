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

            const rez = await client.search({
                limit:10,
                categories:'bars',
                location: req.body.location
                })
               
            const bars = rez.jsonBody.businesses
         
            for (let i = 0; i<bars.length;i++){
                const onebar = await Bar.findOne({'id':bars[i].id})
                if(!onebar){
                    const newBar = Bar()
                    newBar.id = bars[i].id
                    newBar.location =bars[i].location.city
                    bars[i].mybar = newBar
                    await newBar.save()
                }
                
         const Mybar = await Bar.findOne({'id':bars[i].id}).populate('users')
            bars[i].mybar = Mybar
            if(req.user){
        const user = await User.findOne({_id:req.user._id}).populate('bars')
        bars[i].user = user
            }
                
        }
        
            res.send(bars)
        }catch(err){
            res.send(err)
            }
},

getUsers: async (req,res,next)=>{
    try{
       const users = await User.find({}).populate('bars')
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
    const bar = await Bar.findOne({'_id':barid})
   const inbar = bar.users.some((user)=>{
       return user.equals(userid)
   })


    if(inbar){
        bar.users = bar.users.filter((user)=>{
            return user==userid
        })
        bar.going =false
        await bar.save()
        res.send(bar)
    }else{
        
        bar.users.push(userid)
        bar.going =true
        await bar.save()
        res.send(bar)
    }



},

deleteBars: async (req,res,next)=>{
    try{
       const bars = await Bar.remove({})
       res.send(bars)
    }catch(err){
        res.send(err)
    }
},
myBars: async (req,res,next)=>{
    try{
        const loc = req.body.location.toLowerCase();
       const bars = await Bar.find({location:loc})
       res.send(bars)
    }catch(err){
        res.send(err)
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

