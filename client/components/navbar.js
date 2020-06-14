import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import allActions from '../actions/allActions'
import styles from './pages/HomePage/homePage.module.css'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    {isLoggedIn ? (
      <div className={styles.Banner}>
        <div>
          <h1 className={styles.BannerHeading}>Changes</h1>
        </div>
        <div className={styles.BannerLinks}>
          <a href="/newChange">Post a Change</a>
          <a href="/" onClick={e => handleClick(e)}>
            Logout
          </a>
        </div>
      </div>
    ) : (
      <div className={styles.Banner}>
        <div>
          <h1 className={styles.BannerHeading}>Changes</h1>
        </div>
        <div className={styles.BannerLinks}>
          <a href="/signIn">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
    )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
