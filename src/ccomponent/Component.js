import React from 'react'

const Component = (props) => {
  return (
    <ul id="concepts">
    <li className="concept">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  </ul>
  )
}

export default Component
