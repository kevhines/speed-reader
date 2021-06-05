import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Results from './Results'
import addScore from '../../actions/addScore'

class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gameStarted: false,
            display: false,
            number: 2,
            timelimit: 1000,
            turn: 0,
            answer: "",
            gameSentences: [],
            answers: []
        }
    }

    getSentences = () => {
        const shuffled = [...this.props.sentences].sort(() => Math.random() - Math.random())
        let n = this.state.number
        let selected = shuffled.slice(0, n);
        this.setState({
            gameStarted: true,
            display: true,
            turn: 0,
            answer: "",
            gameSentences: selected,
            answers: []
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
            gameStarted: continueGame,
            display: continueGame,
            turn: nextTurn,
            answer: "",
            answers: [...this.state.answers, newAnswer]
        })
    }

    handleScore = (score) => {
          this.props.addScore({user_id: this.props.user.id, percent: score})
    }

    renderResults = () => {
        if (this.state.answers.length > 0) {
           return <Results addScore={this.handleScore} gameSentences={this.state.gameSentences} answers={this.state.answers} />
        } else {
            return <div id="instructions"><b>Instructions:</b> Once you click start you will see a series of sentences. Each will appear for only 1.5 seconds. 
            After each sentenced is removed you will type the exact sentence (including case and punctuation) in the given field.
            After every sentenced has been played you will get a score to demonstrate how well you did.</div>
        }
    }

    renderGame = () => {
        if (this.state.gameStarted) {
                if (this.state.display) {
                    setTimeout(() => this.setState({ display: false}), this.state.timelimit)
                    return  <div id="gameplay">
                                <b>Sentence {this.state.turn}:</b><br />
                                {this.state.gameSentences[this.state.turn].content}
                            </div>
                } else {
                    return <form onSubmit={this.handleSubmit}>Type the sentence you just read here: <input type="text" name="answer" onChange={this.handleChange} value={this.state.answer} /><br /><input type="submit" /></form>
                }
        } else {
             return <>{this.renderResults()}<br /><button onClick={this.handleClick} className="button1">Start Game</button></>
        }
    }
   
    render() {
    return (
        <>
        {this.renderGame()}
        </>
    )
    }
}


function mapStateToProps(state) {
    return {user: {id: state.user.id}, sentences: state.sentences}
  }
  
  
  export default connect(mapStateToProps,{addScore})(Game)
  