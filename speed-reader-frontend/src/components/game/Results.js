import SentenceResult from './SentenceResult'
import {connect} from 'react-redux'
import addScore from '../../actions/addScore'

function Results(props){
    
    let results = []
    let numberOfSentences = props.gameSentences.length
    let answerNumberOfWords
    let testNumberOfWords

    let totalWords = 0
    let totalRight = 0
    let correct = 0
    let score
    let correctWords = []

    for (let i=0; i < numberOfSentences; i++) {
        answerNumberOfWords = props.answers[i].split(' ')
        testNumberOfWords = props.gameSentences[i].content.split(' ')
        totalWords += testNumberOfWords.length
        correctWords = []
        for (let j = 0; j < testNumberOfWords.length; j++) {
             if (answerNumberOfWords[j] ===  testNumberOfWords[j]) {    
                correct += 1
                correctWords.push(true)
            } else {
                correctWords.push(false)
            }
        }

        totalRight += correct
        score = correct + " words out of " + testNumberOfWords.length + " correct"
        results.push({numberIndex: i, sentence: props.gameSentences[i].content, answer: props.answers[i], results: score, mappedWords: correctWords })
        correct = 0
    }

    let finalScore = (totalRight/totalWords * 100).toFixed(2)
    props.addScore({score: {user_id: props.userID, percent: finalScore}})
  
    return (
          <>
            <h1>Results</h1>
            <div className="results">
            You got {totalRight} words out of {totalWords} total words correct.<br /><br />
            That's a score of {finalScore}%</div><br />
            {results.map(result => <SentenceResult key={result.numberIndex} {...result} />)}
          </>
        )
  }

  export default connect(null,{addScore})(Results)