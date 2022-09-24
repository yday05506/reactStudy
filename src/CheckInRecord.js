import React from "react";

class CheckInRecord extends React.Component 
{
    render() {
        return (
            <div>
                <strong>{this.props.name}</strong> :  {this.props.score}점
                <br />
                오늘의 코멘트 : {this.props.comment}
            </div>
        )
    }
}

export default CheckInRecord;