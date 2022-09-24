import React from "react";
import './CheckInRecord.css';

class CheckInRecord extends React.Component 
{
    render() {
        return (
            <div className="check-in-record">
                <div className="name-and-score">
                <strong>{this.props.name}</strong>
                </div>
                <div className="comment">
                    <span className="score">
                       {this.props.score}점
                    </span>
                오늘의 코멘트 : {this.props.comment}
                </div>
            </div>
        )
    }
}

export default CheckInRecord;