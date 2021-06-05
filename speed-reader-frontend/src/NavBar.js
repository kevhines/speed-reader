import {NavLink} from 'react-router-dom'


export default function NavBar(props) {
  // localStorage.setItem('userID', "");
  // localStorage.setItem('userID', 1);
  console.log("navbar")
console.log(props.userID)
  return (
    <>
        <h1>The Speed Reading Tester</h1>
        <div className="navbar">
          {props.userID ? loggedIn() : loggedOut()}
        </div>
    </>
  )

}

const loggedIn = () => {
    return <> 
            <NavLink to="/game" activeClassName="selected">Test Your Speed Reading!</NavLink>
            <NavLink to="/sentences" activeClassName="selected">Sentence Management</NavLink>
            <NavLink to="/login">Log Out</NavLink></>
}

const loggedOut = () => {
    return <> 
            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            <NavLink to="/login" activeClassName="selected">Login</NavLink>
            <NavLink to="/signup" activeClassName="selected">Sign Up</NavLink></>
}

