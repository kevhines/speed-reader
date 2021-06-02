export default function delSentence(id) {

    return function(dispatch) {
      let url = `http://localhost:3001/sentences/${id}`
     console.log(id)
     console.log(url)
    fetch(url, {
      method: "DELETE",
      headers: {Accept: "application/json", "Content-Type": "application/json"}
    }).then(r => r.json())
    .then(sentence => dispatch({type: "DEL_SENTENCE", payload: id}))
  }
}