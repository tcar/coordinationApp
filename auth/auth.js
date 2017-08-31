const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

const credential = require('./credentials')
const User = require('../models/user')


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


passport.use(new FacebookStrategy({
    clientID: credential.facebook.id,
    clientSecret: credential.facebook.secret,
    callbackURL: credential.facebook.callback
},async (accessToken, refreshToken,profile,done)=>{

    try{
       const user = await User.findOne({'facebook.id':profile.id})
        
       if(user){
           return done(null, user)
       }else{
           const newUser = User();
           newUser.facebook.name = profile.displayName
           newUser.facebook.id = profile.id
           newUser.facebook.token = accessToken

           await newUser.save()
           done(null,newUser)
       }
       
    }catch(err){
        done(err, false)
    }


}))