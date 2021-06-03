import React, {Component} from 'react'
import {connect} from 'react-redux'
import editSentence from '../actions/editSentence'
import delSentence from '../actions/delSentence'

class EditSentence extends Component {

    constructor(props) {
        super(props)
        let id = parseInt(props.match.params.sentenceID,10)
        let sentence = (props.sentences) ? props.sentences.find(sentence => sentence.id === id) : {}
        this.state = {
            id: id,
            content: (sentence) ? sentence.content : ""
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.sentences.length === 0) { 
            let sentence = this.props.sentences.find(sentence => sentence.id === this.state.id) 
            this.setState({content: sentence.content})
        }
    }

    handleChange = (e) => {
        this.setState({content: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.editSentence(this.state)
        this.props.history.push("/sentences")
    }

    handleClick = (e) => {
        this.props.delSentence(this.state.id)
        // debugger
        this.props.history.push("/sentences")
    }

    render() {
    return (
        <>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="content" onChange={this.handleChange} value={this.state.content}></input>
            <input type="submit"></input>
        </form>
        <button onClick={this.handleClick}>Delete</button>
        </>
    )
    }
}

function mapStateToProps(state) {
    // debugger
    return {sentences: state.sentences}
  }

export default connect(mapStateToProps, {editSentence, delSentence})(EditSentence)