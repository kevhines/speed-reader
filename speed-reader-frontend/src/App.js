import {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import NavBar from './NavBar'
import SentenceContainer from "./containers/SentenceContainer"
import EditSentence from "./components/EditSentence"
import fetchSentences from './actions/fetchSentences'
import SignUp from "./components/SignUp"

class App extends Component {


  componentDidMount() {
    // debugger
    console.log("mounted: data fetching")
    localStorage.setItem('username', 'Kevin Hines');
    this.props.fetchSentences()
}

componentDidUpdate() {
    let username = localStorage.getItem('username');
    console.log(username)
}
 
  render () {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route exact path='/sentences' render={routerProps => <SentenceContainer {...routerProps} />} />
      <Route exact path='/sentences/:sentenceID/edit' render={routerProps => <EditSentence {...routerProps} />} />
      <Route exact path='/signup' render={routerProps => <SignUp {...routerProps} />} />
     </Router>
  )
  }
}

export default connect(null, {fetchSentences})(App)
