import React, { Component } from 'react'

 class ClassClick extends Component {
    clickHandler = () => alert("Thank for subscribing")
    
  render() {

    return (
      <div>
        
        <button onClick={this.clickHandler}>subscribe</button>
      </div>
    )
  }
}

export default ClassClick
