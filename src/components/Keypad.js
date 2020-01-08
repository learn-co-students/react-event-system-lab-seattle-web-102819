// Code Keypad Component Here
import React from 'react'


class Keypad extends React.Component {
    constructor(){
        super()
    }

    keyUp = (e) => {
        // console.log(e.target.value)
        console.log('Entering password...')
    }
    
    
    render(){
        return (
            <input type="password" onKeyUp={this.keyUp} />
        )
    }
}



export default Keypad;