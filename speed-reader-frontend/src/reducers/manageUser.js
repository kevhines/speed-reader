export default function manageUser(state = {}, action) {

    switch (action.type) {

    case 'LOGIN_USER':
        return action.payload

    case 'LOGOUT_USER':
        return {username: {}}
 
    default:    
        return state
    }
}