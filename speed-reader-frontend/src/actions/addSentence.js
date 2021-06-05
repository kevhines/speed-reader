export default function addSentence(content) {

      return function(dispatch) {
      fetch("http://localhost:3001/sentences", {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({sentence: {content: content}})
      }).then(r => r.json())
      .then(sentence => {
        if (sentence.message) {
          dispatch({type: "DISPLAY_ERROR", payload: sentence})
        } else {
          dispatch({type: "ADD_SENTENCE", payload: sentence})
        }
      })
   
    }

}
  