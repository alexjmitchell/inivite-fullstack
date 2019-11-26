import React from "react"
import { useUsers } from "../hooks"

const Going = props => {
  const { going } = useUsers()

  console.log("going from going.js ====>", going)

  return (
    <div>
      {going.map((person, i) => (
        <div key={"going-users-" + i}>
          <img
            src={person.user.picture.large}
            alt={`${person.user.name.first} ${person.user.name.last}`}
          />
          <p>{`${person.user.name.first} ${person.user.name.last}`}</p>
          <p>{person.user.phone}</p>
        </div>
      ))}
    </div>
  )
}

export default Going
