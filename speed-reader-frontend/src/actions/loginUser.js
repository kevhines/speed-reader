export default function loginUser(user) {

    return function(dispatch) {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify(user)
    }).then(r => r.json())
    .then(user => {
      if (user.message) {
        dispatch({type: "DISPLAY_ERROR", payload: user})
      } else {
        dispatch({type: "LOGIN_USER", payload: user})
      }
    })
   
  }

}