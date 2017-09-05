module.exports = {
    facebook:{
        id:process.env.FACEBOOK_ID||'111685616193072',
        secret:process.env.FACEBOOK_SECRET|| '2645731c404bc548b423d524172a62bb',
        callback:process.env.HOST||'http://localhost:5000/' + 'auth/facebook/callback'
    },

    yelp:{
        id:process.env.YELP_ID|| 'LynGUDLyKS_sysQhQcNv9A',
        secret:process.env.YELP_SECRET|| 'rGmPi1CiK6twLLqYGAXaPFbDSrAaOHLl8RujOk7PZgLlke1pOxxwWQOfwAR3FoKW'
    }
}