import axios from 'axios'


export function getBars(location){
    return  (dispatch)=>{
        dispatch({type:'FETCH_BARS'})

       axios.post('/bars', location)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

    }
}