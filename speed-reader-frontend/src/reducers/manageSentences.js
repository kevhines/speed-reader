export default function manageSentences(state = [], action) {
    let newSentences
    switch (action.type) {
    case 'FETCH_SENTENCES':
        return action.payload

    case 'ADD_SENTENCE':
        return [...state, action.payload]

    case 'EDIT_SENTENCE':
        newSentences = state.map(sentence => (sentence.id === action.payload.id) ? action.payload : sentence)
        return newSentences
 
    case 'DEL_SENTENCE':
        newSentences = state.filter(sentence => sentence.id !== action.payload)
        return newSentences

    default:    
        return state
    }
}