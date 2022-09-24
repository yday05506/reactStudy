import React from "react";

class Student extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            score : 0
        }
        this.plusScore = this.plusScore.bind(this)
        this.minusScore = this.minusScore.bind(this)
    }

    plusScore() {
        this.setState({score : this.state.score + 1})
    }

    minusScore() {
        this.setState({score : this.state.score - 1})
    }

    render () {
        return (
            <div>
            이름 : {this.props.name}
            <br/>
            점수 : {this.state.score}
            {' '}
            <button type = "button" onClick={this.minusScore}>-</button>
            <button type = "button" onClick={this.plusScore}>+</button>
        </div>
        )
    }
}

export default Student;