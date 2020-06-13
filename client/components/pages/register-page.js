import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'

// https://ux.stackexchange.com/questions/1080/using-sign-in-vs-using-log-in Aribitray reason to use signupOrJoin/registerChange/signin vs login/logout
const RegisterPage = () => {
  // TODO: Minimal Fields, User Validation, No inappropriate names
  // TODO: Able to dispatch an action to hit our API and redirect to where user is directed, post a story page
  // TODO: Call to action should be a submit button
  // TODO: Load in registration Component

  // Redirects:
  // CTA: [Join/Register Button] = /newStory {Authenticated}
  // CTA: [Login Button] = /login
  // Authentication: if (!unauthenticated) => {Do Nothing}

  return (
    <div className="register_page">
      <h1> This Is the register page! </h1>
    </div>
  )
}

export default RegisterPage
