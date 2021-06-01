import React, {Component, Fragment} from 'react'
// import {connect} from 'react-redux'
import Sentences from "../components/Sentences"
import SentenceForm from "../components/SentenceForm"

class SentenceContainer extends Component {

    render() {
    return (
        <>
        <SentenceForm />
        <Sentences />
        </>
    )
    }
}

  
  export default SentenceContainer