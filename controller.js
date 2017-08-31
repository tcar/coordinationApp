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
         const Mybar = await Bar.findOne({'id':bars[i].id})
            bars[i].mybar = Mybar
                
        }
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
    const bar = await Bar.findOne({'_id':barid})
   
   const inbar = bar.users.some((user)=>{
       return user==userid
   })




    if(inbar){
        bar.users = bar.users.filter((user)=>{
            return user!=userid
        })
        bar.going -=1
        await bar.save()
        res.send(bar)
    }else{
        
        bar.users.push(userid)
        bar.going +=1
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
       const bars = await Bar.find({})
       res.send(bars)
    }catch(err){
        res.send(err)
    }
},


}

