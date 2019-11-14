import React from "react"
import { useUsers } from "../hooks"

const Main = props => {
  const { users, going, addGoing } = useUsers()
  console.log("going ====>", going)
  return (
    <div>
      {users.map((user, i) => (
        <div key={`User-${i}`}>
          <img
            src={user.picture.large}
            alt={user.name.first + " " + user.name.last}
          />
          <ul>
            <li>
              {user.name.first}&nbsp;{user.name.last}
            </li>
            <li>{user.phone}</li>
            <li>{user.email}</li>
          </ul>
          <div className="buttons">
            <button>-</button>
            <button onClick={event => addGoing(user)}>+</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Main
