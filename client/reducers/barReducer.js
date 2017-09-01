export default function reducer(state = {
fetchBars:false,
barsFetched:false,
bars:[]
}, action){
    switch(action.type){
        case 'FETCH_BARS': {
            return {
                fetchBars:true
            }
        }
          case 'BARS_FETCHED': {
            return {
                fetchBars:false,
                barsFetched:true,
                bars:action.payload
            }
        }

        default:
        return state
        
    }
 


}