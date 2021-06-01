export default function manageSentences(state = {sentences: []}, action) {
    switch (action.type) {
    case 'FETCH_SENTENCES':
        return {sentences: action.payload}

    case 'ADD_SENTENCES': 
        return state
    default:    
        return state
    }
}