import React, {Component} from 'react'
import {connect} from 'react-redux'
import findUser from '../actions/findUser'

class LogIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("login code goes here")
        console.log(this)
        let newUser = {user: this.state}
        console.log(newUser)
        // debugger
        this.props.findUser(newUser)
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            UserName: <input type="text" name="username" onChange={this.handleChange} value={this.state.username} /><br />
            Password: <input type="password" name="password" onChange={this.handleChange} value={this.state.password} /><br />
            <input type="submit" />
        </form>
    )
    }
}

export default connect(null, {findUser})(LogIn)