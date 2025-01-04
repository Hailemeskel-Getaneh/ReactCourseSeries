import React, { Component } from 'react'

 class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    increament(){
       this.setState({
                count:this.state.count + 1
            }
            , () => {
                console.log('The call back is ', this.state.count)
            }
       )
    }

    decreament(){
        this.setState({
            count:this.state.count - 1
        })
    }

    reset(){
        this.setState({
            count:0
        })
    }

  render() {
    return (
      <div className=' ml- 36 p-8 rounded w-6/12 bg-gray-300'>
        <h1 className='text-green-800 text-2xl'>Hi there and welcome</h1>

    <h1 className="text-4xl mb-9 text-blue-500">{this.state.count}</h1>   

    <button onClick={() => this.increament()} className=" p-2 rounded mr-4 bg-green-400 text-white">Increament</button>
     <button onClick={()=> this.reset()} className=" p-2 rounded mr-4 bg-green-400 text-white">Reset</button>
    <button onClick={() => this.decreament()} className=" p-2 rounded mr-4 bg-green-400 text-white">Decreament</button>    


      </div>
    )
  }
}

export default Counter
