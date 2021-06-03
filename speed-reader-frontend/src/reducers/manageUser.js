export default function manageUser(state = {}, action) {

    switch (action.type) {

    case 'ADD_USER':
        // debugger
        return {username: action.payload.username, id: action.payload.id}

    case 'LOGIN_USER':
        return {username: action.payload.username, id: action.payload.id}

    // case 'CLEAR_USER':
    //     console.log(action.payload)
    //     return {username: ""}
    //     // return state
 
    default:    
        return state
    }
}