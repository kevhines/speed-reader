import React, {Component} from 'react'
import {connect} from 'react-redux'
import loginUser from '../actions/loginUser'
import logoutUser from '../actions/logoutUser'

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
        this.props.loginUser(newUser)
        this.props.history.push("/")
    }

    componentDidMount() {
        if (this.props.user.id) {
            console.log("logged in already")
            localStorage.setItem('userID', "");
            this.props.logoutUser()
        } else {
        console.log("not logged in yet")
        }
    }

    render() {
        console.log("login page")
        console.log(this.props)
    return (
        <form onSubmit={this.handleSubmit}>
            UserName: <input type="text" name="username" onChange={this.handleChange} value={this.state.username} /><br />
            Password: <input type="password" name="password" onChange={this.handleChange} value={this.state.password} /><br />
            <input type="submit" />
        </form>
    )
    }
}


function mapStateToProps(state) {
    // debugger
    return {user: state.user}
  }

export default connect(mapStateToProps, {loginUser, logoutUser})(LogIn)