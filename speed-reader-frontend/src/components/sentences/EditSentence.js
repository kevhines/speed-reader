import React, {Component} from 'react'
import {connect} from 'react-redux'
import editSentence from '../../actions/editSentence'
import delSentence from '../../actions/delSentence'

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
        if (e.nativeEvent.submitter.name === "delete") {
            this.props.delSentence(this.state.id)
        } else {
            this.props.editSentence(this.state)
        }
        this.props.history.push("/sentences")
    }

    render() {
    return (
        <>
        <h2>Edit Sentence</h2>
        <form onSubmit={this.handleSubmit}>
        <textarea name="content" rows="5" cols="60" onChange={this.handleChange} value={this.state.content} />
        <br /><input className="button1" type="submit" name="edit" value="Edit" /> <input className="button1" type="submit" name="delete"  value="Delete" /> 
        </form>
        </>
    )
    }
}

function mapStateToProps(state) {
    return {sentences: state.sentences}
  }

export default connect(mapStateToProps, {editSentence, delSentence})(EditSentence)