import React, { useEffect, useState } from 'react'
// import User from './User'

const UserList = () => {

const [users, setUsers] = useState([])

useEffect(() => {
  fetch('https://randomuser.me/api?results=25')
  .then((res) => res.json())
  .then((users) => setUsers(users))
}, [])


  return (
    <ol>
      {users.results?.map((user) => {
        return (
          <li>{user.name.first}</li>
        )})}
    </ol>
  )
}

export default UserList
