import React, { useState, useEffect } from 'react'
import UserInfo from './UserInfo'

const User = props => {
  const [user, setUser] = useState(props)
  const [isHidden, setHide] = useState(true)

  useEffect(() => {
    setUser(props);
  }, [props]);

  return (
    <div className="userCard" onClick={() => {isHidden ? setHide(false) : setHide(true)}}>
      <div>
        <img 
          src={user.picture.large}
          alt="user thumbnail"
          onClick={() => {isHidden ? setHide(false) : setHide(true)}}>
        </img>
      </div>
      <div>
        <h3>{user.name.first} {user.name.last}</h3>
        {isHidden ? 
        <div></div> :
        <UserInfo {...user} />
      } 
      </div>

    </div>
  )
}

export default User
