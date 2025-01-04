import React, { Component } from 'react'

 class ComplicatedCounter extends Component {

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    increament(){
       this.setState( prevState  => ({count: prevState.count + 1
    }))
    }

    decreament(){
        this.setState(prevState =>({count:prevState.count - 1}))
    }

    reset(){
        this.setState({
            count:0
        })
    }

    increamentFive(){
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }

    decreamentFive(){
        this.decreament()
        this.decreament()
        this.decreament()
        this.decreament()
        this.decreament()
    }

  render() {
    return (
      <div className=' ml- 36 p-8 rounded w-6/12 bg-gray-300'>
        <h1 className='text-green-800 text-2xl'> change count by 5</h1>

    <h1 className="text-4xl mb-9 text-blue-500">{this.state.count}</h1>   

    <button onClick={() => this.increamentFive()} className=" p-2 rounded mr-4 bg-green-800 text-white">Increament by 5</button>
     <button onClick={()=> this.reset()} className=" p-2 rounded mr-4 bg-green-800 text-white">Reset</button>
    <button onClick={() => this.decreamentFive()} className=" p-2 rounded mr-4 bg-green-800 text-white">Decreament by 5</button>    


      </div>
    )
  }
}

export default ComplicatedCounter
