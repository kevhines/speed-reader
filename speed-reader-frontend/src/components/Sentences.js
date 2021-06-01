import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import fetchSentences from '../actions/fetchSentences'

class Sentences extends Component {


    componentDidMount() {
        this.props.fetchSentences()
    }

    renderSentences = () => { 
        console.log(this)
       return this.props.sentences.map(sentence => <li key={sentence.id}>{sentence.content}</li>) 
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
  
  
  export default connect(mapStateToProps, {fetchSentences})(Sentences)