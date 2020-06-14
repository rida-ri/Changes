import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'
import {Form, Button, Col, InputGroup} from 'react-bootstrap'

// https://ux.stackexchange.com/questions/1080/using-sign-in-vs-using-log-in Aribitray reason to use signupOrJoin/registerChange/signin vs login/logout
const RegisterPage = () => {
  // TODO: Minimal Fields, User Validation, No inappropriate names
  // TODO: Able to dispatch an action to hit our API and redirect to where user is directed, post a story page
  // TODO: Call to action should be a submit button
  // TODO: Load in registration Component

  // Redirects:
  // CTA: [Join/Register Button] = /newChange {Authenticated}
  // CTA: [Login Button] = /login
  // Authentication: if (!unauthenticated) => {Do Nothing}

  const [firstName, setFirstName] = useState(''),
    [lastName, setLastName] = useState(''),
    [userName, setUserName] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    dispatch = useDispatch()

  const handleSubmit = evt => {
    evt.preventDefault()

    dispatch(
      allActions.userActions.signUpauth(
        firstName,
        lastName,
        userName,
        email,
        password,
        'signUp'
      )
    )
  }

  return (
    <div className="signup_page">
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationFormikFirstName">
          <Form.Label>First Name</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="First Name"
              aria-describedby="inputGroupPrepend"
              name="firstName"
              onChange={e => setFirstName(e.target.value)}
              value={firstName}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationFormikLastName">
          <Form.Label>Last Name</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Last Name"
              aria-describedby="inputGroupPrepend"
              name="lastName"
              onChange={e => setLastName(e.target.value)}
              value={lastName}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationFormikUserName">
          <Form.Label> Username</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              name="userName"
              onChange={e => setUserName(e.target.value)}
              value={userName}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationFormikEmail">
          <Form.Label> Email</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="email"
              aria-describedby="inputGroupPrepend"
              name="email"
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

        <Button color="primary" onClick={e => handleSubmit(e)}>
          Start making changes
        </Button>
      </Form.Row>
    </div>
  )
}

export default RegisterPage
