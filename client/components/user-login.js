import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from './actions/allActions'

const UserLogin = () => {
  // TODO: Use useEffect to ping our backend to authenticate user
  // TODO: Redirection, For example; if a user has came from post a story to login -> /newStory
  // TODO: Add secondary actions, expect if user clicked the wrong button and meant register
  // TODO: Determine if functional component or pure (No logic)
  // TDB:  Having a remember me feature?

  return (
    <div className="login_component">
      <h1> This Is the home page! </h1>
    </div>
  )
}

export default UserLogin
