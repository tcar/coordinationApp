export default function reducer(state = {
isAuthenticated:false,
userid:'',
bars:[],
users:[]
}, action){
    switch(action.type){
        case 'LOGIN': {
            return {...state,
                isAuthenticated:true,
                userid:action.payload
            }
        }
         case 'LOGOUT': {
            return {...state,
                isAuthenticated:false
            }
        }
        case 'GET_USER': {
            return {...state,
                bars:action.payload
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