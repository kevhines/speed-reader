import React, {Component} from 'react'
import {connect} from 'react-redux'
import editSentence from '../actions/editSentence'

class EditSentence extends Component {

    constructor(props) {
        super(props)
        let id = parseInt(props.match.params.sentenceID,10)
        let sentence = (props.sentences) ? props.sentences.find(sentence => sentence.id === id) : {}
        this.state = {
            id: id,
            sentence: (sentence) ? sentence.content : ""
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.sentences.length === 0) { 
            let sentence = this.props.sentences.find(sentence => sentence.id === this.state.id) 
            this.setState({sentence: sentence.content})
        }
    }

    handleChange = (e) => {
        this.setState({sentence: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editSentence(this.state)
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="content" onChange={this.handleChange} value={this.state.sentence}></input>
            <input type="submit"></input>
        </form>
    )
    }
}

function mapStateToProps(state) {
    // debugger
    return {sentences: state.sentences}
  }

export default connect(mapStateToProps, {editSentence})(EditSentence)