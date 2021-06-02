export default function editSentence(sentence) {

    return function(dispatch) {
      console.log(sentence)
      let url = `http://localhost:3001/sentences/${sentence.id}`
    //  console.log(sentence)
    //  console.log(url)
    fetch(url, {
      method: "PATCH",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({sentence})
    }).then(r => r.json())
    .then(sentence => dispatch({type: "EDIT_SENTENCE", payload: sentence}))
  }

}