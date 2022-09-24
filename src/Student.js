import React from "react";

class Student extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            score : 0
        }
    }

    render () {
        return (
            <div>
            이름 : {this.props.name}
            <br/>
            점수 : {this.state.score}
            {' '}
            <button type = "button">+</button>
            <button type = "button">-</button>
        </div>
        )
    }
}

export default Student;