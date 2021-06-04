import React, {Component} from 'react'
import {connect} from 'react-redux'
import addUser from '../actions/addUser'

class SignUp extends Component {

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
        console.log("sign up code goes here")
        console.log(this)
        let newUser = {user: this.state}
        console.log(newUser)
        // debugger
        this.props.addUser(newUser)
        this.props.history.push("/")
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

export default connect(null, {addUser})(SignUp)