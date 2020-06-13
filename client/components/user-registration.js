import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from './actions/allActions'

// Material UI Specific
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})
// END of Material UI

const UserRegistration = () => {
  // TODO: Use useEffect to ping our backend to authenticate user
  // TODO: Redirection, For example; if a user has came from post a story to login -> /newStory
  // TODO: Add secondary actions, expect if user clicked the wrong button and meant register
  // TODO: Determine if functional component or pure (No logic)
  // TDB:  Having a remember me feature?

  return (
    <div className="registration_component">
      <h1> Register Component </h1>
    </div>
  )
}

export default UserRegistration
