// Possible Ideas For Home Page Actions
// 'SET_REDIRECT_TO_POST_NEW_STORY' ->  We can set a flag to tell our application, after the user registers/login redirect to the new story page; this triggers when the user clicks the main post story button
// 'RETRIEVE_READ_ONLY_STORIES' -> Retrieve the list, most likely to an axios call to our backend that takes a flag to return the minimal version
// 'GOOD_READ_ONLY_STORIES' -> If the backend returns a 200 and returns the stories which we can populate
// 'BAD_READ_ONLY_STORIES' -> If the backend returns 404, We can update the front end accordingly
// ADD MORE?

// I think a good idea for this action creator as well is to basically utilize thunk to retrieve and set our session details within our browser using
// other actions maybe from userActions.js
// Resource: https://github.com/reduxjs/redux-thunk#composition
