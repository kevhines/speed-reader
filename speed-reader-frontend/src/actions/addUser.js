export default function addUser(user) {

    return function(dispatch) {
        console.log(user)
    fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify(user)
    }).then(r => r.json())
    .then(user => {
      if (user.message) {
        dispatch({type: "DISPLAY_ERROR", payload: user})
      } else {
        dispatch({type: "ADD_USER", payload: user})
      }
    })
  }

}