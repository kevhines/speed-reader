import {NavLink} from 'react-router-dom'


export default function NavBar(props) {
  // localStorage.setItem('userID', "");
  // localStorage.setItem('userID', 1);
  console.log("navbar")
console.log(props.userID)
  return (
      <>
          <NavLink to="/">Home</NavLink> 
          {props.userID ? loggedIn() : loggedOut()}
      </>
  )

}

const loggedIn = () => {
    return <> | <NavLink to="/sentences">Sentence Management</NavLink> | <NavLink to="/game">Test Your Speed Reading!</NavLink> | <NavLink to="/login">Log Out</NavLink></>
}

const loggedOut = () => {
    return <> | <NavLink to="/login">Login</NavLink> | <NavLink to="/signup">Sign Up</NavLink></>
}

