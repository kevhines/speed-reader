import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import Sentence from './Sentence'

class Sentences extends Component {


    renderSentences = () => {
        console.log("got to Sentences render") 
// debugger
            // return this.props.sentences.map(sentence => <li key={sentence.id}><Link to={`/sentences/${sentence.id}/edit`}>{sentence.content}</Link></li>) 
            return this.props.sentences.map(sentence => <Sentence key={sentence.id} sentence={sentence} />)
    }

    render() {
        // debugger
    return (
        <>
        <h2>All Sentences</h2>
        <ul>{this.renderSentences()}</ul>
        </>
    )
    }
}

function mapStateToProps(state) {
    // debugger
    return {sentences: state.sentences}
  }
  
  
  export default connect(mapStateToProps)(Sentences)