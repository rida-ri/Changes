import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'
import {Form, Button, Col, InputGroup} from 'react-bootstrap'

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
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationFormikUsername">
          <Form.Label>email</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              name="username"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationFormik01">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="firstName"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Button color="primary" onClick={e => handleSubmit(e)}>
        Start making changes
      </Button>
    </div>
  )
}

export default SignInPage
