import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

class SentenceForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sentence: ""
        }
    }

    handleChange = (e) => {
        this.setState({sentence: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.sentence)
        this.setState({sentence: ""})
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


  
  
  export default SentenceForm