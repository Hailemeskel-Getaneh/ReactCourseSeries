import React, { Component } from 'react'

 class TernaryOpperatorRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
  render() {
    return (
      this.state.isLoggedIn ? (
          <h2>Welcome here Haile</h2> 
      )
      :
      (
        <h2>Welcome here Guest</h2>
      ) 
    )
  }
}

export default TernaryOpperatorRendering
