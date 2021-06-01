export default function fetchSentences() {
    return (dispatch) => {
      fetch("http://localhost:3001/sentences")
      .then(function(response) {
        return response.json()
      })
      .then((sentences) => { 
        dispatch({type: "FETCH_SENTENCES", payload: sentences})
      })
    }
  }