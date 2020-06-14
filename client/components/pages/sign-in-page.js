import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'

const SignInPage = () => {
  // TODO: Simple two fields (email and password)
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    dispatch = useDispatch()

  const handleSubmit = evt => {
    evt.preventDefault()

    dispatch(allActions.userActions.auth(email, password, 'login'))
  }

  // TODO: Able to dispatch an action to hit our API and find our user and return some sort of session object
  // TODO: Redirect to post a new story or feed

  // Redirects:
  // CTA: [Sign In Button] = /newChange {Authenticated} or /changes {Authenticated} depending on if user redirect
  // Authentication: if (!unauthenticated) => {Do Nothing}

  return (
    <div className="signin_page">
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          type="password"
          id="password"
          aria-describedby="my-helper-text"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={e => handleSubmit(e)}
      >
        Start making changes
      </Button>
    </div>
  )
}

export default SignInPage
