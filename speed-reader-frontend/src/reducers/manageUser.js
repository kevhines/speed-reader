export default function manageUser(state = {}, action) {

    switch (action.type) {

    case 'ADD_USER':
        // localStorage.setItem('userID', action.payload.id);
        return {username: action.payload.username, id: action.payload.id}

    case 'LOGIN_USER':
        // localStorage.setItem('userID', action.payload.id);
        return {username: action.payload.username, id: action.payload.id}

    case 'LOGOUT_USER':
        return {username: {}}
 
    default:    
        return state
    }
}