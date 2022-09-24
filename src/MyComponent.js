import React from "react";

class MyComponent extends React.Component 
{
    render() {
        return (
            <div>
                <h1>This is MyComponent</h1>
                {this.props.name}
            </div>
        )
    }
}

export default MyComponent;