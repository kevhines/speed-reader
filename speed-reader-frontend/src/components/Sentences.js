import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Sentences extends Component {


    renderSentences = () => { 
       return this.props.sentences.map(sentence => <li key={sentence.id}><Link to={`/sentences/${sentence.id}/edit`}>{sentence.content}</Link></li>) 
    }

    render() {
    return (
        <>
        {this.renderSentences()}
        </>
    )
    }
}

function mapStateToProps(state) {
    return {sentences: state.sentences}
  }
  
  
  export default connect(mapStateToProps)(Sentences)