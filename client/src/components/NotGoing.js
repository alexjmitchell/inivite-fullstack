import React from "react"
import Card from "./Card"
import "../styles/SidePages.css"
import { Link } from "react-router-dom"
import { useUsers } from "../hooks"

const NoGo = props => {
  const { notgoing } = useUsers()
  return (
    <>
      <div className="header-container">
        <Link to="/" className="home-button">&larr;</Link>
        <h1 className="Main-Title">Not Going</h1>
      </div>
      <div className="invite-list">
        {notgoing.map((person, i) => (
          <Card
            source={person.user.picture.large}
            name={`${person.user.name.first} ${person.user.name.last}`}
            phone={person.user.phone}
            email={person.user.email}
          />
        ))}
      </div>
    </>
  )
}

export default NoGo
