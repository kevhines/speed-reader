import {Link} from 'react-router-dom'

function Sentence(props){
    let {id, content} = props.sentence
    return (
        <li><Link to={`/sentences/${id}/edit`}>{content}</Link></li>
        )
  }
  
  export default Sentence