export default function manageSentences(state = {sentences: []}, action) {
    let newSentences
    switch (action.type) {
    case 'FETCH_SENTENCES':
        return {sentences: action.payload}

    case 'ADD_SENTENCE':
        return {sentences: [...state.sentences, action.payload]}

    case 'EDIT_SENTENCE':
        console.log(action.payload)
        newSentences = state.sentences.map(sentence => (sentence.id === action.payload.id) ? action.payload : sentence)
        console.log("edit state")
        return {sentences: newSentences}
        // return state
 
    case 'DEL_SENTENCE':
        console.log(action)
        console.log("deleting")
        // debugger
        newSentences = state.sentences.filter(sentence => sentence.id !== action.payload)
        return {sentences: newSentences}
        // console.log(newSentences)
        // return {sentences: newSentences}
 
 
    default:    
        return state
    }
}