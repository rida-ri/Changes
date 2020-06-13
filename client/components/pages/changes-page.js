import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'

const ChangesPage = () => {
  // TODO: Retrieve Current User, and save data from database in store
  // TODO: Populate Changes feed, use spinner pre-data / pre-fetch -> then populate once data retrieved
  // TODO: Call to action within the mini-story preview. This basically means when you click view on the minified version of the story

  // Redirects:
  // CTA: [New Story Button] = /newStory {Authenticated}
  // CTA: [Views Button] = /story/{storyId} {Authenticated}
  // CTA: [Logout Button] = / {Unauthenticated}
  // Authentication: if (!unauthenticated) => /login

  return (
    <div className="changes_page">
      <h1> This Is the Changes page! </h1>
    </div>
  )
}

export default ChangesPage
