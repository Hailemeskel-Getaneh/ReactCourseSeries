import React from 'react'
import persons from './personsList'

function ListRendering() {

    const names = ["Hailemeskel", "Elias", "Girume"]
    const nameList = names.map(name => <h3>{name}</h3>
    )

    const PersonsList = persons.map(person => <li className=''>I am {person.name} . I am studing {person.department}</li>)

  return (
    <div>
        <h2>The following is names list</h2>
      {nameList}
      
      <h2>The following is persons list</h2>

    {PersonsList}
    </div>
  )
}

export default ListRendering
