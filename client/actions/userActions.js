import axios from 'axios'

export function login(user){
  return {type:'LOGIN',payload:user}
  }


export function logout(){
  return dispatch=>{
      axios({
            method:'get',
            url:'/logout',
          })
        .then((res)=>{
          
          dispatch({type:'LOGOUT', payload:res.data})
        

      })
  }
}

