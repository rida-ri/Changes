// Possible Ideas For User Registration Actions
// 'NEW_REGISTRATION_FORM' ->  When the user submits the INPUT
// 'POST_REGISTRATION_FORM' -> When we are awaiting a response from our backend promise (async/await)
// 'GOOD_REGISTRATION_FORM' -> If the backend returns a 200 and returns session token
//  -> Dispatch => 'SET_USER_SESSION' From userActions;
// 'BAD_REGISTRATION_FORM' -> If the backend returns 404, handle on front-end (i.e Alert error to user)
// ADD MORE?

// I think a good idea for this action creator as well is to basically utilize thunk to retrieve and set our session details within our browser using
// other actions maybe from userActions.js
// Resource: https://github.com/reduxjs/redux-thunk#composition
