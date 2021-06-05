import React from "react";

export default class ErrorModal extends React.Component {

    onClick = (e) => {
        this.props.onClose()
      };

    render() {
        if(!this.props.show){
            return null;
        }
      return <div className="modal" id="modal">
                <div>
                    <a href="#close" title="Close" className="close" onClick={this.onClick}>X</a>
                    <h2>Error Message</h2>
                    <p>{this.props.children}</p>
                </div>
            </div>
    }
  }