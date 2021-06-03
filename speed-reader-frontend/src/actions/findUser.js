export default function findUser(user) {

    return function(dispatch) {
        console.log(user)
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify(user)
    }).then(r => r.json())
    .then(user => dispatch({type: "LOGIN_USER", payload: user}))
  }

}