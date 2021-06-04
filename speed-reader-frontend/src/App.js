import {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import NavBar from './NavBar'
import SentenceContainer from "./containers/SentenceContainer"
import GameContainer from "./containers/GameContainer"
import Home from "./components/Home"
import EditSentence from "./components/EditSentence"
import fetchSentences from './actions/fetchSentences'
import findUser from './actions/findUser'
import LogIn from "./components/LogIn"


class App extends Component {


  componentDidMount() {
    // debugger
    console.log("mounted: data fetching")
    this.props.fetchSentences()
    let userID = localStorage.getItem('userID');
    if (userID) {
      this.props.findUser(userID)
    }
}

componentDidUpdate(prevProps) {
    console.log("updated App")
    console.log(prevProps)
    console.log(this.props)
    if (this.props.user.id) { //and doesn't equal current userID
      localStorage.setItem('userID', this.props.user.id);
    }
    let tempID = localStorage.getItem('userID');
    console.log(tempID)
}
 
  render () {

  return (
    <Router>
      <NavBar userID={this.props.user.id} />
      <Route exact path="/" component={Home} />
      <Route exact path='/sentences' component={SentenceContainer} />
      <Route exact path='/sentences/:sentenceID/edit' component={routerProps => <EditSentence {...routerProps} />} />
      <Route exact path='/signup' render={routerProps => <LogIn {...routerProps} />} />
      <Route exact path='/login' render={routerProps => <LogIn {...routerProps} />} />
      <Route exact path='/game' component={GameContainer} />
     </Router>
  )
  }
}


function mapStateToProps(state) {
  // debugger
  return {user: state.user}
}

export default connect(mapStateToProps, {fetchSentences, findUser})(App)
