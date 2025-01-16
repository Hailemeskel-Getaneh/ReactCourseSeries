import React, { Component } from 'react'

 class IfElseRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogedIn : false
      }
    }

  render() {
      if(this.state.isLogedIn){

        return <h3>Welcom Haile</h3>
    }
    
    else{
      return <h3>Welcome Guest</h3>
    }
  
  }
}

export default IfElseRendering
