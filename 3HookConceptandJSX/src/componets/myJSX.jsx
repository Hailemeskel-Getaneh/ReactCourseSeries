import React from "react";


const Hello = () => {
    // return(

    //     <div className="myDiv">
    //         <h1>This is a jsx element</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'myDiv', className:"myClass"},
        React.createElement('h1', null, 'Hello this is jsx component')
    )
}

export default Hello