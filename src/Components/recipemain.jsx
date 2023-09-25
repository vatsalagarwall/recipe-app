import React from 'react'

const Recipemain = ({title,calories,image}) => {
  return (
    <div>
        <p>{title}</p>
        <p>{calories}</p>
        <img src={image} alt=""/>
    </div>
  )
}

export default Recipemain