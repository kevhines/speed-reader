export default function editSentence(sentence) {

    return function(dispatch) {
      let url = `http://localhost:3001/sentences/${sentence.id}`
      fetch(url, {
      method: "PATCH",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({sentence})
    }).then(r => r.json())
    .then(sentence => {
      if (sentence.message) {
        dispatch({type: "DISPLAY_ERROR", payload: sentence})
      } else {
        dispatch({type: "EDIT_SENTENCE", payload: sentence})
      }
    })
  }

}