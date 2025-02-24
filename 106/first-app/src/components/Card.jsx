import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4VLMJdBMHE2mpaPaY-PT-n9Y6ZwaPQLaHA&s" alt="" style={{border: "2px solid black"}} width={333}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
