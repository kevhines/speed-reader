export default function manageSentences(state = [], action) {
    let newSentences
    switch (action.type) {
    case 'FETCH_SENTENCES':
        return action.payload

    case 'ADD_SENTENCE':
        return [...state, action.payload]

    case 'EDIT_SENTENCE':
        console.log(action.payload)
        newSentences = state.map(sentence => (sentence.id === action.payload.id) ? action.payload : sentence)
        console.log("edit state")
        return newSentences

 
    case 'DEL_SENTENCE':
        console.log(action)
        console.log("deleting")
        newSentences = state.filter(sentence => sentence.id !== action.payload)
        return newSentences

 
 
    default:    
        return state
    }
}