import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'


class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gameStarted: false,
            display: false,
            number: 2,
            gameSentences: []
        }
    }

    getSentences = () => {
        console.log(this.props.sentences)
        const shuffled = [...this.props.sentences].sort(() => Math.random() - Math.random())
        console.log(shuffled)
        let n = this.state.number
        let selected = shuffled.slice(0, n);
        console.log(selected)
        this.setState({gameSentences: selected})
    }
   
    handleClick = (e) => {
        this.setState({display: true, gameStarted: true})
        this.getSentences()
        setTimeout(() => this.setState({ display: false}), 5000)
        // return () => clearTimeout(timer);
    }
   
    renderGame = () => {
        if (this.state.gameStarted) {
            //  return this.displaySentence()
        } else {
             return <button onClick={this.handleClick}>Start Game</button>
        }
    }
   
    render() {
    return (
        <>
        Game Happens<br />
        {this.renderGame()}
        </>
    )
    }
}


function mapStateToProps(state) {
    // debugger
    return {sentences: state.sentences}
  }
  
  
  export default connect(mapStateToProps)(Game)
  