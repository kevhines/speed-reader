function Results(props){
    
    let results = props.answers.map(answer => <>{answer}<br /></> )
    let results2 = props.gameSentences.map(sentence => <>{sentence.content}<br /></> )

    let answerWords
    let testWords

    let totalWords = 0
    let totalRight = 0
    let correct = 0
    let scores = []

    for (let i=0; i < props.answers.length; i++) {
        // debugger
        answerWords = props.answers[i].split(' ')
        testWords = props.gameSentences[i].content.split(' ')
        totalWords += testWords.length
        for (let j = 0; j < testWords.length; j++) {

            if (answerWords[j] ===  testWords[j]) {    
                correct += 1
            }

        }
        totalRight += correct
        scores.push(correct + " words out of " + testWords.length + " correct")
        correct = 0
        
    }
    scores.push("Total: " + totalRight + " words out of " + totalWords + " correct")
    let results3 = scores.map(score => <>{score}<br /></> )
    // debugger
    
    return (
          <>
            <h2>Results</h2>
            {results}
            {results2}
            {results3}
          </>
        )
  }


  
  
  
  
  
  export default Results