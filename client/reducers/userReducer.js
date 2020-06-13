import {GET_USER, REMOVE_USER} from '../actions/userActions'

const user = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      console.log('he')
      return action.user
    case 'REMOVE_USER':
      return {}
    default:
      return state
  }
}

export default user
