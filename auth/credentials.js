module.exports = {
    facebook:{
        id:process.env.FACEBOOK_ID,
        secret:process.env.FACEBOOK_SECRET,
        callback:process.env.HOST + 'auth/facebook/callback'
    },
    yelp:{
        id:process.env.YELP_ID,
        secret:process.env.YELP_SECRET
    }
}