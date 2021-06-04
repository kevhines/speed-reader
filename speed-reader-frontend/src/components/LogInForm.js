import React from 'react'

class LogInForm extends React.Component {


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitCallback(this.props.formState)
  }

  handleChange = (e) => {this.props.updateStateInParent({[e.target.name]: e.target.value})}

  render = () => {

    return (
    <form onSubmit={this.handleSubmit}>
        UserName: <input type="text" name="username" onChange={this.handleChange} value={this.props.formState.username} /><br />
        Password: <input type="password" name="password" onChange={this.handleChange} value={this.props.formState.password} /><br />
        <input type="submit" />
    </form>
    )
  }

}

export default LogInForm