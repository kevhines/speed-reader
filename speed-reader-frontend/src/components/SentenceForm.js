import React, {Component} from 'react'
import {connect} from 'react-redux'
import addSentence from '../actions/addSentence'

class SentenceForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            content: ""
        }
    }

    handleChange = (e) => {
        this.setState({content: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addSentence(this.state.content)
        this.setState({content: ""})
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <textarea name="content" rows="5" cols="60" onChange={this.handleChange} value={this.state.content} />
            <input type="submit" />
        </form>
    )
    }
}

export default connect(null, {addSentence})(SentenceForm)