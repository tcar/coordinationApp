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

export function getUser(){
  return dispatch=>{
      axios({
            method:'get',
            url:'/user',
          })
        .then((res)=>{
          
          dispatch({type:'GET_USER', payload:res.data.bars})
        

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
            console.log(res.data)
            dispatch({
              type:'TOGGLE_GOING',payload:res.data
            })

      })
      }
}
export function getUsers(){
  return dispatch=>{
      axios({
            method:'get',
            url:'/users',
          })
        .then((res)=>{
            dispatch({
              type:'GET_USERS',payload:res.data
            })

      })
      }
}