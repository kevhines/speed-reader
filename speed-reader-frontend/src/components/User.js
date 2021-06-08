import React from "react";
import {connect} from 'react-redux'


class User extends React.Component {

    renderScores = () => {
        this.props.user.scores.sort((firstEl, secondEl) => {
            let a = new Date(firstEl.created_at)
            let b = new Date(secondEl.created_at) 
            return b - a
        })
        return this.props.user.scores.map((score, i) => <tr key={i}><td className="first">{score.percent}%</td><td>{score.created_at}</td></tr>)
    }


    render() {
        if (this.props.user.id) {
        return <>
                <h1>{this.props.user.username}</h1>
                <h2>Scores</h2>
                <table>
                <tr><th className="first">Percent Correct</th><th>Date</th></tr>
                {this.renderScores()}
                </table>
               </>
        } else {
            return null
        }
    }
}

function mapStateToProps(state) {
    return {user: state.user}
  }

  export default connect(mapStateToProps)(User)