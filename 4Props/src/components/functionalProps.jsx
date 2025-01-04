import React from "react";


const Greeting = (props) => {

    return (
        <>

        <h1>My name is {props.name} . I study {props.department}</h1>
         <p>{props.children}</p>
        </>
    )
}

export default Greeting

