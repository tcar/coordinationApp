export default function reducer(state = {
isAuthenticated:false,
userid:''

}, action){
    switch(action.type){
        case 'LOGIN': {
            return {
                isAuthenticated:true,
                userid:action.payload
            }
        }
         case 'LOGOUT': {
            return {
                isAuthenticated:false
            }
        }
       
        default:
    return state
        
    }
 


}