This program is about how to use event handlers in class component.

# here is how to  use event handlers , there are four ways to use them
   1. binding it in the render method and use this keyword and nor parentesis as follow
             onClick = {this.changeHandler.bind(this)}
   2. using arrow function in the render method but you need to have parentesis and call it as 
        function as follow.
             onClick = {() => this.changeHandler()} 
# the second one is good choice for passing parameters

   3. binding the handler in the contructur and use it as this.changeHandler in the render method
         this.changeHandler = this.changeHandler.bind(this) adn call it as
             onClick = {() => this.changeHandler} 
               
   4. using arrow function to declare the handler  and call it as follow
             onClick = {() => this.changeHandler} 


# The thrid approach is the best and official in the react documentation. since the handler is binded once in the constructor it works well if you need to use in many places
