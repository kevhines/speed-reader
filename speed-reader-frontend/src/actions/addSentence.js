export default function addSentence(content) {

return function(dispatch) {
    console.log(content)
    console.log("doesn't do anything yet")
    dispatch({type: "ADD_SENTENCE", payload: "fake entry"})
}
  }


      // return function(dispatch) {
    //   fetch("http://localhost:3001/lists", {
    //     method: "POST",
    //     headers: {Accept: "application/json", "Content-Type": "application/json"},
    //     body: JSON.stringify({list: list})
    //   }).then(r => r.json())
    //   .then(sentence => dispatch({type: "ADD_SENTENCE", payload: sentence}))
    // }
  