import React from "react";


// There are two ways of destructuring props


export const Intoruducing1 = ({name, department}) => {

return(

    <div>
        <h1>{name} studies {department}</h1>
    </div>
)

}

//another alternative is the following

export const Intoruducing2 = props => {
    const {name, department} = props;

    return(

        <h1>{name} studies {department}</h1>
    )
}