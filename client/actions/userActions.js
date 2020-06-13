// Possible Ideas For User Actions - I am thinking these are agnostic from registration and signup
// 'GET_USER_SESSION' - Maybe we can have registration + signup utlize this after API is hit
import axios from 'axios'
import history from '../history'
const defaultUser = {}

const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

//Thunk Middleware
const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export default {
  logout,
  auth,
  me,
  getUser,
  removeUser,
  GET_USER,
  REMOVE_USER
}
// I think a good idea for this action creator as well is to basically utilize thunk to retrieve and set our session details within our browser using
// other actions maybe from userActions.js
// Resource: https://github.com/reduxjs/redux-thunk#composition
