import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'

const StoryViewPage = () => {
  // Behavior
  // [PreFetch Data]: Spinner
  // [Retreived Data]: Populate Page
  // [Leave Data]: N/A

  // TODO: Retrieve Individual story, add as an action then eventually a reducer
  // TODO: Display user story, enable conditional rendering for objects like meta conditions (isAnonyomous, allowComments, etc.)
  // TODO: Split up to multiple functional components? Yes[] No[]
  // TODO: Have a back button to redirect us back to the stories feed.

  // Redirects:
  // CTA: [Back Button] = /stories {Authenticated}
  // CTA: [Logout Button] = / {Unauthenticated}
  // Authentication: if (!unauthenticated) => /login

  return (
    <div className="view_story_page">
      <h1> This Is the view story page! </h1>
    </div>
  )
}

export default StoryViewPage
