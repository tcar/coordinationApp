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
              console.log(res.data)
             dispatch({
           
               type:'BARS_FETCHED',
               payload:res.data
             })
     
        
      })
      }
}



export function going(id){
  return dispatch=>{
        dispatch({type:'GOING'})
      axios({
            method:'put',
            url:'/going',
            data:id,
            withCredentials: true
          })
        .then((res)=>{
            console.log(res)
      })
      }
}