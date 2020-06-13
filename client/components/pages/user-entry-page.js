import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'

const UserEntryPage = () => {
  // TODO: Depending on action, will load a login component or a register component (Conditional) Default: (Registration) if user is coming from HomePage
  // TODO: Populate Fields, User Validation
  // TODO: Be able to make a request to our backend or 3rd party system, to confirm user -> Redirect user
  // TODO: Find ways to determine if user will be redirected to post stories or something else?

  // Conditional Rendering:
  // CTA: [Login Button] = <UserLogin />

  // Redirects:
  // onRegistrationComplete [Redux] => /newStory
  return (
    <div className="user_entry_page">
      <h1> This Is the user entry page! </h1>
    </div>
  )
}

export default UserEntryPage
