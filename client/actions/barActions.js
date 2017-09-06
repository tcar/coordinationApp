import axios from 'axios'


export function getBars(location){
  
  return dispatch=>{
    localStorage.setItem('location',location.location)
        dispatch({type:'FETCH_BARS'})
      axios({
            method:'post',
            url:'/bars',
            data:location,
            withCredentials: true
          })
        .then((res)=>{
             dispatch({
           
               type:'BARS_FETCHED',
               payload:res.data
             })
     
        
      })
      }
}



