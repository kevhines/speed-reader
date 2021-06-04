import {NavLink} from 'react-router-dom'


export default function NavBar(props) {
  // localStorage.setItem('userID', "");
  // localStorage.setItem('userID', 1);
  console.log("navbar")
console.log(props.userID)
  return (
        <div className="navbar">
          <NavLink exact to="/" activeClassName="selected">Speed Reader Test</NavLink> 
          {props.userID ? loggedIn() : loggedOut()}
        </div>
  )

}

const loggedIn = () => {
    return <> | <NavLink to="/sentences" activeClassName="selected">Sentence Management</NavLink> | <NavLink to="/game" activeClassName="selected">Test Your Speed Reading!</NavLink> | <NavLink to="/login">Log Out</NavLink></>
}

const loggedOut = () => {
    return <> | <NavLink to="/login" activeClassName="selected">Login</NavLink> | <NavLink to="/signup" activeClassName="selected">Sign Up</NavLink></>
}

