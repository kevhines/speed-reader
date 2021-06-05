export default function manageUser(state = {}, action) {

    switch (action.type) {

    case 'LOGIN_USER':
        return action.payload

    case 'LOGOUT_USER':
        return {username: {}}

    case 'ADD_SCORE':
        return {...state, scores:[...state.scores, action.payload]}    

    default:    
        return state
    }
}