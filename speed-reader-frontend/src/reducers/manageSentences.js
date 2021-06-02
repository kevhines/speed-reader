export default function manageSentences(state = {sentences: []}, action) {
    switch (action.type) {
    case 'FETCH_SENTENCES':
        return {sentences: action.payload}

    case 'ADD_SENTENCE':
        return {sentences: [...state.sentences, action.payload]}
    
    default:    
        return state
    }
}