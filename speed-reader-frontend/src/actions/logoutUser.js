export default function logoutUser() {

    return function(dispatch) {
        dispatch({type: "LOGOUT_USER"})
  }

}