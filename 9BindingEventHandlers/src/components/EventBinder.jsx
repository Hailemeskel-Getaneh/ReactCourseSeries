import React, { Component } from 'react'

 class EventBinder extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Welcome here, please subscribe'
      }
//bind the handler here in the constructor
      this.changeHandler = this.changeHandler.bind(this)
    }

// comment this for using the four method
    // changeHandler(){
    //     this.setState({
    //         message:"Thank you for subscribing"
    //     })
    // };

// declare arrow function for the fourth method

    changeHandler = () => {
        this.setState({
            message:"Thank you for subscribing"
        })
    }
    
  render() {
    return (
      <div>
        {/* There are four ways of using event handlers */}

         <h1>{this.state.message}</h1>


               {/* The first way is */}
        {/* <button onClick={this.changeHandler.bind(this)}>subscribe</button>   */}


                {/* The second way is */}
        {/* <button onClick={() => this.changeHandler()}>subscribe</button> */}


            {/* The thrid way is */}
        {/* <button onClick={this.changeHandler}>subscribe</button>      */}
   

             {/* The fouth way is  */}
          <button onClick={this.changeHandler}>subscribe</button>     

            
        
      </div>
    )
  }
}

export default EventBinder
