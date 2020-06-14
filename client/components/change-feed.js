import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Tab, Tabs, Jumbotron} from 'react-bootstrap'
import PreviewChanges from './change-preview'

const arrOfChanges = [
  {title: 'abc', body: 'sdbsjkdvbsbvojsdvos'},
  {title: 'def', body: 'sdbsjkdvbsbvojsdvos'},
  {title: 'ghi', body: 'sdbsjkdvbsbvojsdvos'},
  {title: 'jhk', body: 'sdbsjkdvbsbvojsdvos'}
]

class ChangesFeed extends React.Component {
  constructor(props) {
    super()
    this.state = {
      activeTab: 1,
      dummy: 'Hey'
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.getChanges = this.getChanges.bind(this)
  }

  handleSelect(selectedTab) {
    this.setState({
      activeTab: selectedTab
    })
    this.getChanges(selectedTab)
  }

  getChanges(selectedTab) {
    console.log(this.state.dummy)
    console.log(selectedTab)
  }

  render() {
    return (
      <div padding="10 px">
        <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
          <Tab eventKey={1} title="Trending">
            <Jumbotron>
              <PreviewChanges
                props={arrOfChanges}
                name=" that are Happening NOW"
              />
            </Jumbotron>
          </Tab>
          <Tab eventKey={2} title="Public Feed">
            <Jumbotron>
              <PreviewChanges props={arrOfChanges} name=" in Public Feed" />
            </Jumbotron>
          </Tab>
          <Tab eventKey={3} title="Your Communities">
            <Jumbotron>
              <PreviewChanges
                props={arrOfChanges}
                name=" in Your Communities"
              />
            </Jumbotron>
          </Tab>
          <Tab eventKey={4} title="Your Subscriptions">
            <Jumbotron>
              <PreviewChanges
                props={arrOfChanges}
                name=" in Your Subscriptions"
              />
            </Jumbotron>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

//   const mapDispatch = dispatch => {
//     return {
//       handleClick() {
//         dispatch(logout())
//       }
//     }
//   }

export default connect(mapState, null)(ChangesFeed)
