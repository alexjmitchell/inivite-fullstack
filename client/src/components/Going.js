import React from 'react'
import { useUsers } from "../hooks"

const Going = props => {
  const { going } = useUsers()
  console.log("going from going.js ====>",going)
  return (
    <div>
      {going.map((user, i) => (
        <div key={"going-users-" + i}>
         <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
         <p>{`${user.name.first} ${user.name.last}`}</p>
        </div>
      ))}
    </div>
  )
}


export default Going