import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Container, Row, Col} from 'react-bootstrap'
import ChangesFeed from './change-feed'
import Supporter from './supporter'
// import {ChangesFeed, Supporter, Supporting} from './components'

/**
 * COMPONENT
 */
export const UserHome = props => {
  // const {email} = props

  return (
    <div>
      <div>
        <h3>Welcome, {props.user.userName}</h3>
      </div>

      <ChangesFeed props={props} />
      <div>
        <Container>
          <Row>
            <Col>
              <Supporter props={props} name="Supporters" />
            </Col>
            <Col>
              <Supporter props={props} name="Supporting" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
