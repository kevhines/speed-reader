export default function manageSentences(state = {sentences: []}, action) {
    switch (action.type) {
    case 'FETCH_SENTENCES':
        return {sentences: action.payload}

    case 'ADD_SENTENCE':
        return {sentences: [...state.sentences, action.payload]}

    case 'EDIT_SENTENCE':
        console.log(action.payload)
        let newSentences = state.sentences.map(sentence => (sentence.id === action.payload.id) ? action.payload : sentence)
        console.log("edit state")
        return {sentences: newSentences}
        // return state
 
    case 'DEL_SENTENCE':
        console.log(action)
        console.log("deleting")
        // debugger
        return state.sentences.filter(sentence => sentence.id !== action.payload)
        // console.log(newSentences)
        // return {sentences: newSentences}
 
 
    default:    
        return state
    }
}