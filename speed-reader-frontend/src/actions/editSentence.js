export default function editSentence(sentence) {

    return function(dispatch) {
    fetch("http://localhost:3001/sentences", {
      method: "PATCH",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({sentence})
    }).then(r => r.json())
    .then(sentence => dispatch({type: "EDIT_SENTENCE", payload: sentence}))
  }

}