import React from "react";
import {connect} from 'react-redux'
import clearError from '../actions/clearError'

class ErrorModal extends React.Component {

    state = {
      show: false
    };


    onClick = (e) => {
        console.log(this.state.show)
        this.setState({
          show: false
        });
        this.props.clearError()
      };

      componentDidUpdate(prevProps) {
        console.log("updated Modal")
        console.log(prevProps)
        console.log(this.props)
        // debugger
        if (this.props.error && !prevProps.error) {
          debugger
          this.setState({
            show: true
          });
        }

    }

    render() {
      // debugger
        if(!this.state.show){
            return null;
        }
      return <div className="modal" id="modal">
                <div>
                    <a href="#close" title="Close" className="close" onClick={this.onClick}>X</a>
                    <h2>Error Message</h2>
                    <p>{this.props.error}</p>
                </div>
            </div>
    }
  }

  function mapStateToProps(state) {
    // debugger
    return {error: state.error}
  }

  export default connect(mapStateToProps, {clearError})(ErrorModal)