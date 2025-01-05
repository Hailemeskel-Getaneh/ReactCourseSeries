import React, {Component} from 'react'

class Welcome extends Component {

    render(){

    const {name, department} = this.props
    // if you have state you can destruture them as follow
    // const {state1, state2} = this.state
    
    return(
 
        <h1> Hello {name}. Congra for joining {department}</h1>
        )
    }
}

export default Welcome