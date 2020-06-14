import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  ChangesFeed,
  Supporter,
  Supporting
} from './components'
import {
  PostChangePage,
  ChangesPage,
  HomePage,
  ChangeViewPage,
  RegisterPage,
  SignInPage
} from './components/pages'
import allActions from './actions/allActions'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/newChange" component={PostChangePage} />
        <Route exact path="/changes" component={ChangesPage} />
        <Route path="/change/:changeId" component={ChangeViewPage} />
        <Route exact path="/register" component={RegisterPage} /> */}
        <Route exact path="/signIn" component={SignInPage} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            {/* <Route path="/changeFeed" component={ChangesFeed} /> */}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}
console.log(allActions)
const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(allActions.userActions.me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
  // isAdmin: PropTypes.bool.isRequired
}
