export default function addUser(score) {

    return function(dispatch) {
    fetch("http://localhost:3001/scores", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify(score)
    }).then(r => r.json())
    .then(score => dispatch({type: "ADD_SCORE", payload: score}))
  }
}