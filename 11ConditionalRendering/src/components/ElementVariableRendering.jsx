import React, { Component } from 'react'

 class ElementVariableRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    
  render() {

    let message 

    if(this.state.isLoggedIn){
        message = <div>Welocome Haile</div>
    }
    else{
        message =<div>Welcome Guest</div>
    }
    return (
      <div>
        {message}
      </div>
    )
  }
}

export default ElementVariableRendering
