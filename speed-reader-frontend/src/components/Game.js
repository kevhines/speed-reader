import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Results from './Results'


class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gameStarted: false,
            display: false,
            number: 2,
            turn: 0,
            answer: "",
            gameSentences: [],
            answers: []
        }
    }

    getSentences = () => {
        console.log(this.props.sentences)
        const shuffled = [...this.props.sentences].sort(() => Math.random() - Math.random())
        console.log(shuffled)
        let n = this.state.number
        let selected = shuffled.slice(0, n);
        console.log(selected)
        this.setState({
            gameSentences: selected, 
            display: true, 
            gameStarted: true
        })
    }
   
    handleClick = (e) => {
        this.getSentences()
        // return () => clearTimeout(timer);
    }

    handleChange = (e) => {
        this.setState({answer: e.target.value})
    }
   
    handleSubmit = (e) => {
        e.preventDefault()
        let newAnswer = this.state.answer
        let nextTurn = this.state.turn + 1
        let continueGame = (nextTurn === this.state.number) ? false : true
        this.setState({ 
            turn: nextTurn,
            answer: "",
            answers: [...this.state.answers, newAnswer], 
            display: continueGame,
            gameStarted: continueGame
        })

    }

    renderResults = () => {
        if (!this.state.gameStarted && this.state.answers.length > 0) {
           return <Results gameSentences={this.state.gameSentences} answers={this.state.answers} />
        }
    }

    renderGame = () => {
        if (this.state.gameStarted) {
                if (this.state.display) {
                    setTimeout(() => this.setState({ display: false}), 1000)
                    return this.state.gameSentences[this.state.turn].content
                } else {
                    return <form onSubmit={this.handleSubmit}>Type the sentence you just read here: <input type="text" name="answer" onChange={this.handleChange} value={this.state.answer} /><br /><input type="submit" /></form>
                }
        } else {
             return <>{this.renderResults()}<br /><button onClick={this.handleClick}>Start Game</button></>
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
  