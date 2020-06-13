import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'

// https://ux.stackexchange.com/questions/1080/using-sign-in-vs-using-log-in Aribitray reason to use signupOrJoin/registerChange/signin vs login/logout
const SignInPage = () => {
  // TODO: Simple two fields (Username and password)
  // TODO: Able to dispatch an action to hit our API and find our user and return some sort of session object
  // TODO: Redirect to post a new story or feed

  // Redirects:
  // CTA: [Sign In Button] = /newChange {Authenticated} or /changes {Authenticated} depending on if user redirect
  // Authentication: if (!unauthenticated) => {Do Nothing}

  return (
    <div className="signin_page">
      <h1> This Is the signin page! </h1>
    </div>
  )
}

export default SignInPage
