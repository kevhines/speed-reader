import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Sentences extends Component {


    renderSentences = () => {
        console.log("got to render") 
       if (this.props.sentences) {
            return this.props.sentences.map(sentence => <li key={sentence.id}><Link to={`/sentences/${sentence.id}/edit`}>{sentence.content}</Link></li>) 
       } else {
           console.log("null")
          
        //    debugger
           return null
       }

    }

    render() {
        // debugger
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