import React, {Component} from 'react'
import {connect} from 'react-redux'
import LogInForm from './LogInForm'

import loginUser from '../actions/loginUser'
import logoutUser from '../actions/logoutUser'
import addUser from '../actions/addUser'

class LogIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (text) => {
        this.setState({...this.state, ...text})
    }

    handleSubmit = (e) => {
        console.log("NEW login code goes here")
        console.log(this)
        let newUser = {user: this.state}
        console.log(newUser)
        if (this.props.match.path === "/login") {
            console.log("log in")
            this.props.loginUser(newUser)
        } else {
            console.log("sign up")
            this.props.addUser(newUser)
        }
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
    return (
        <LogInForm submitCallback={this.handleSubmit} formState={this.state} updateStateInParent={this.handleChange}/>
    )
    }
}


function mapStateToProps(state) {
    // debugger
    return {user: state.user}
  }

export default connect(mapStateToProps, {loginUser, logoutUser, addUser})(LogIn)