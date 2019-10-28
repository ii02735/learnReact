import React, { Component } from 'react'

class UserInput extends Component
{
    render()
    {
        return(<div>
            <input type="text" onChange={this.props.changeName}/>
        </div>);
    }
}

export default UserInput;