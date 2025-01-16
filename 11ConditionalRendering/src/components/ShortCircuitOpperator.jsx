import React, { Component } from 'react'

 class ShortCircuitOpperator extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    
  render() {
    return (
      this.state.isLoggedIn && <div>Welcome Haile</div>
    )
  }
}

export default ShortCircuitOpperator
