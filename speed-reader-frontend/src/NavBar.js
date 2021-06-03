import {NavLink} from 'react-router-dom'


export default function NavBar(props) {
  return (
      <>
          <NavLink to="/">Home</NavLink> | &nbsp;
          <NavLink to="/sentences">Sentence Management</NavLink> | &nbsp;
          <NavLink to="/login">Login</NavLink> | &nbsp;
          <NavLink to="/signup">Sign Up</NavLink>
      </>
  )

}