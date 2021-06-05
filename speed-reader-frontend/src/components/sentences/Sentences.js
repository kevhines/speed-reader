import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Sentence from './Sentence'

class Sentences extends Component {


    renderSentences = () => {
        return this.props.sentences.map(sentence => <Sentence key={sentence.id} sentence={sentence} />)
    }

    render() {
    return (
        <>
        <h2>All Sentences</h2>
        <ul>{this.renderSentences()}</ul>
        </>
    )
    }
}

function mapStateToProps(state) {
    return {sentences: state.sentences}
  }
  
  
  export default connect(mapStateToProps)(Sentences)