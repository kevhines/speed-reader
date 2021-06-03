// import React, {Fragment} from 'react'
// import {connect} from 'react-redux'
import Sentences from "../components/Sentences"
import SentenceForm from "../components/SentenceForm"


function SentenceContainer(){
    return (
          <>
            <SentenceForm />
            <Sentences />
          </>
        )
  }
  
  export default SentenceContainer