export default function clearError() {

    return function(dispatch) {
        dispatch({type: "CLEAR_ERROR"})
  }

}