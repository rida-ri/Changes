import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'

const HomePage = () => {
  // TODO: Add state to tell if user is logged in or not?
  // TODO: Retrieve Current User
  // TODO: Conditional rendering, (i.e authenticated vs unauthenticated views)
  // TODO: Determine possible redirection routes
  // TODO: Define Call to action (Post a story)
  // TODO: Define secondary action (Login segment for unauthenticated user)
  // TODO: Include Minimal feed? Maybe like the unauthenticated view of /stories

  return (
    <div className="home_page">
      <h1> This Is the home page! </h1>
    </div>
  )
}

export default HomePage
