import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'

const PostStoryPage = () => {
  // TODO: Have basic fields to have user input connected with actions/reducers
  // TODO: Hitting the database to add a new post
  // TODO: User Validation, Data Sanitization, NSFW Filter (inapporiate words? api possibly?)
  // TODO: If post is successful to database, please redirect to /stories
  // TODO: Discuss Split up into multiple components Yes[] or No[]
  // TODO: Show notification on next page to show story was shared with a link to it (Alert)
  // TODO: Spinner to show User feedback that post is being saved correctly

  // Redirects:
  // CTA: [Submit Button] = /stories {Authenticated}
  // CTA: [Logout Button] = / {Unauthenticated}
  // Authentication: if (!unauthenticated) => /login

  return (
    <div className="post_story_page">
      <h1> This Is the post story page! </h1>
    </div>
  )
}

export default PostStoryPage
