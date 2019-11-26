import React from "react"
import "../styles/Card.css"

const Card = props => {
  return (
    <div className="Card-Container">
      <img src={props.source} alt={props.name} className="Card-Image" />
      <div className="Card-Details">
        <h4 className="Card-Name">{props.name}</h4>
        <p className="Card-Number">{props.phone}</p>
        <p className="Card-Email">{props.email}</p>
      </div>
    </div>
  )
}

export default Card
