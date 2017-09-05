export default function reducer(state = {
fetchBars:false,
barsFetched:false,
bars:[],
isgoing:[]

}, action){
    switch(action.type){
        case 'FETCH_BARS': {
            return {
                fetchBars:true,
                barsFetched:false
            }
        }
          case 'BARS_FETCHED': {
            return {
                fetchBars:false,
                barsFetched:true,
                bars:action.payload
            }
        }
           case 'TOGGLE_GOING': {
            return {
                isgoing:action.payload
            }
        }
   

        default:
        return state
        
    }
 


}