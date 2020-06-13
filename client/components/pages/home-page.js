import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Button from '@material-ui/core/Button'
import allActions from '../../actions/allActions'

const HomePage = () => {
  // TODO: Add state to tell if user is logged in or not?
  // Solution: take store isLoggedIn
  const isLoggedin = useSelector(state => state.user.id)
  //   console.log(
  //       "HERE", state  )
  // TODO: Retrieve Current User
  // Solution: dispatch(getUser);
  // Persist State possibilty

  // TODO: Conditional rendering, (i.e authenticated vs unauthenticated views)
  // Solution: We'll render depending using useSelector

  // TODO: Determine possible redirection routes
  // Conditional redirects

  // TODO: Define Call to action (Post a story)
  // Solution: post story button -> start making changes

  // TODO: Define secondary action (Login segment for unauthenticated user)
  // Solution: login logout COnditional render

  // TODO: Include Minimal feed? Maybe like the unauthenticated view of /Changes
  // Solution: Sorted feed of top 10 change stories

  return (
    <div className="home_page">
      <h1> This Is the home page! {isLoggedin} </h1>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  )
}

export default HomePage
