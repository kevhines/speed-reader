import {NavLink} from 'react-router-dom'


export default function NavBar(props) {
  return (
      <>
          <NavLink to="/">Home</NavLink> | &nbsp;
          <NavLink to="/sentences">Sentence Management</NavLink>
      </>
  )

}