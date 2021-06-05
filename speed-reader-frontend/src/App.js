import {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import NavBar from './NavBar'
import SentenceContainer from "./containers/SentenceContainer"
import GameContainer from "./containers/GameContainer"
import Home from "./components/Home"
import EditSentence from "./components/sentences/EditSentence"
import LogIn from "./components/login/LogIn"
import ErrorModal from "./components/ErrorModal"
import User from "./components/User"
import fetchSentences from './actions/fetchSentences'
import findUser from './actions/findUser'


class App extends Component {

  componentDidMount() {
    this.props.fetchSentences()
    let userID = localStorage.getItem('userID');
    if (userID) {
      this.props.findUser(userID)
    }
}

componentDidUpdate(prevProps) {
    let storedID = localStorage.getItem('userID');
    if (this.props.user.id && this.props.user.id !== storedID ) { //and doesn't equal current userID
      localStorage.setItem('userID', this.props.user.id);
    }
}
 
  render () {

  return (
    <Router>
      <NavBar userID={this.props.user.id} />
      <Route exact path="/" component={Home} />
      <Route exact path='/sentences' component={SentenceContainer} />
      <Route exact path='/sentences/:sentenceID/edit' render={routerProps => <EditSentence {...routerProps} />} />
      <Route exact path='/users' component={User} />
      <Route exact path='/signup' render={routerProps => <LogIn {...routerProps} />} />
      <Route exact path='/login' render={routerProps => <LogIn {...routerProps} />} />
      <Route exact path='/game' component={GameContainer} />
      <ErrorModal />
     </Router>
  )
  }
}


function mapStateToProps(state) {
  return {user: {id: state.user.id}}
}

export default connect(mapStateToProps, {fetchSentences, findUser})(App)
