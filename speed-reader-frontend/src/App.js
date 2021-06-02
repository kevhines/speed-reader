import SentenceContainer from "./containers/SentenceContainer"
import {useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar'


function loginCheck() {
  console.log("mounted")
  localStorage.setItem('username', 'Kevin Hines');
}

function postUser() {
  let username = localStorage.getItem('username');
  console.log(username)
}

function App() {
  useEffect(loginCheck, []);
  useEffect(postUser);
  
  return (
    <Router>
      <NavBar />
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route path='/sentences' render={routerProps => <SentenceContainer {...routerProps} />} />
    </Router>
  );
}

export default App;
