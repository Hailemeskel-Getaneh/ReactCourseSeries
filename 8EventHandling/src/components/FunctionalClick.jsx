import React from 'react'

function FunctionalClick() {

    const clickHandler = () =>{
        console.log("button is clicked");
        alert('button is clicked')
    }
  return (
    <div>
      <button onClick={clickHandler}>Click me</button>

    </div>
  )
}

export default FunctionalClick
