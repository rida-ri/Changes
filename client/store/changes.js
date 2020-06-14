import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CHANGES = 'GET_CHANGES'
// const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const change = []

/**
 * ACTION CREATORS
 */
const getChanges = change => ({type: GET_CHANGES, change})
// const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const gotChanges = () => async dispatch => {
  try {
    const res = await axios.get('/api/changes')
    console.log(res, 'res in got changes')
    // dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
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

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = change, action) {
  switch (action.type) {
    // case GET_USER:
    //   return action.user
    // case REMOVE_USER:
    //   return defaultUser
    default:
      return state
  }
}
