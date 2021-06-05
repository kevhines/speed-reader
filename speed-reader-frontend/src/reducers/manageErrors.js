export default function manageError(state = "", action) {

    switch (action.type) {

    case 'DISPLAY_ERROR':
        return action.payload.message

    case 'CLEAR_ERROR':
        return ""

    default:    
        return state
    }
}