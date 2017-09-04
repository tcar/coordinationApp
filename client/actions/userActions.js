import axios from 'axios'

export function login(){
  return {type:'LOGIN'}
  }


export function logout(){
  return dispatch=>{
      axios({
            method:'get',
            url:'/logout',
          })
        .then((res)=>{
             console.log(res)
          dispatch({type:'LOGOUT', payload:res.data})
        

      })
  }
}