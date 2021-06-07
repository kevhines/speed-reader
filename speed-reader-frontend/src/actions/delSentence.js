export default function delSentence(id, history) {

    return function(dispatch) {
      let url = `http://localhost:3001/sentences/${id}`
    fetch(url, {
      method: "DELETE",
      headers: {Accept: "application/json", "Content-Type": "application/json"}
    }).then(r => r.json())
    .then(sentence => {
        dispatch({type: "DEL_SENTENCE", payload: id})
        history.push("/sentences")
      })
  }
}