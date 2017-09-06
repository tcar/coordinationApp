export default function reducer(state = {
fetchBars:false,
barsFetched:false,
bars:[],
error:''


}, action){
    switch(action.type){
        case 'FETCH_BARS': {
            return {
                fetchBars:true,
                barsFetched:false
            }
        }
          case 'BARS_FETCHED': {
              if(action.payload=='no match found'){
                  return{...state,
                      error:action.payload
                  }
              }else{
                   return {...state,
                fetchBars:false,
                barsFetched:true,
                bars:action.payload
            }
              }
           
        }
           
   

        default:
        return state
        
    }
 


}