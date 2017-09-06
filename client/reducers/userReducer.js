export default function reducer(state = {
isAuthenticated:false,
userid:'',
bars:[],
users:[],
user:[]
}, action){
    switch(action.type){
     
         case 'LOGOUT': {
            return {...state,
                isAuthenticated:false
            }
        }
        case 'LOGIN': {
            return {...state,
                isAuthenticated:true,
                bars:action.payload.bars,
                user:action.payload
            }
        }
           case 'TOGGLE_GOING': {
              
            return {...state,
                bars:action.payload
            }
        }
                case 'GET_USERS': {
              
            return {...state,
                users:action.payload
            }
        }

        default:
    return state
        
    }
 


}