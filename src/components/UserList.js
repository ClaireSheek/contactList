import React, { useEffect, useState } from 'react'
import User from './User'

const UserList = () => {

const [users, setUsers] = useState([])

useEffect(() => {
  fetch('https://randomuser.me/api?results=25')
  .then((res) => res.json())
  .then((users) => setUsers(users.results))
}, [])

// const sortedUsers = this.users.sort((a, b) => a.name.first.localeCompare(b.name.first))


  return (
    <ol className="userList">
      {users
      .sort((a, b) => {
        return(
          a.name.first > b.name.first
        )
      })
      .map((user) => {
        return (
          <li key={user.id.value}>
            <User {...user} />
          </li>
        )})}
    </ol>
  )
}

export default UserList
