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
             
          localStorage.setItem('info', JSON.stringify(res.data));
          dispatch({type:'BARS_FETCHED', payload:res.data})
        
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
        .then(()=>{
          const location = {location:localStorage.getItem('location')}
          return axios({
            method:'post',
            url:'/bars',
            data:location,
            withCredentials: true
          })
        .then((res)=>{
             
          localStorage.setItem('info', JSON.stringify(res.data));
          dispatch({type:'BARS_FETCHED', payload:res.data})
        
      })
      })
      }
}