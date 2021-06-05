export default function findUser(id) {

    return function(dispatch) {
    fetch("http://localhost:3001/find", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({user: {id}})
    }).then(r => r.json())
    .then(user => dispatch({type: "LOGIN_USER", payload: user}))
  }

}