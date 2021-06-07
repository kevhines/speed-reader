import React, {Component} from 'react'
import {connect} from 'react-redux'
import LogInForm from './LogInForm'

import loginUser from '../../actions/loginUser'
import logoutUser from '../../actions/logoutUser'
import addUser from '../../actions/addUser'

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
        let newUser = {user: this.state}
        if (this.props.match.path === "/login") {
            this.props.loginUser(newUser, this.props.history)
        } else {
            this.props.addUser(newUser, this.props.history)
        }
    }

    componentDidMount() {
        if (this.props.user.id) {
            localStorage.setItem('userID', "");
            this.props.logoutUser()
        } 
    }

    render() {
    return (
        <LogInForm submitCallback={this.handleSubmit} formState={this.state} updateStateInParent={this.handleChange}/>
    )
    }
}


function mapStateToProps(state) {
    return {user: state.user}
  }

export default connect(mapStateToProps, {loginUser, logoutUser, addUser})(LogIn)