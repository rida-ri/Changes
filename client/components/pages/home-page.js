import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'
import {Button} from 'react-bootstrap'

const HomePage = () => {
  const isLoggedin = useSelector(state => state.user.id)

  // TODO: Retrieve Current User
  // Solution: dispatch(getUser);
  // Persist State possibilty

  let history = useHistory()
  const ctaHandler = e => {
    if (isLoggedin) {
      history.push('/newChange')
    } else {
      history.push('/signIn')
    }
  }

  // TODO: Include Minimal feed? Maybe like the unauthenticated view of /Changes
  // Solution: Sorted feed of top 10 change stories
  const feed = [
    {
      id: 1,
      title: 'First',
      body: 'This is the body'
    },
    {
      id: 2,
      title: 'Second',
      body: 'This is the second body'
    }
    // {
    //   id: 3,
    //   title: 'Third',
    //   body: 'This is the third body'
    // },
    // {
    //   id: 4,
    //   title: 'Fourth',
    //   body: 'This is the fourth body'
    // }
  ]
  let user = 'Chase Thorpe'
  return (
    <div className="home_page" style={{backgroundColor: '#FEFAF1'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1>Changes</h1>
        <a href="/signIn">Login</a>
        <a href="/register">Register</a>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <h2>Silence is not the answer</h2>
          <p>
            Let's give the voice back to the people,lets give a platform for the
            disenfranchisedpost your story, make a <span>Change</span>
          </p>
          <Button color="primary">Post Your Story</Button>
        </div>
        <div style={{border: '1px solid black', width: '50%'}}>
          <img />
        </div>
      </div>
      <div />
      {/* <h1> This Is the home page! </h1>
      <Button variant="contained" color="primary" onClick={e => ctaHandler(e)}>
        Start making changes
      </Button> */}

      {/* <div id="min-feed">
        {feed.map(item => {
          return (
            <Card className={classes.root} key={item.id}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read Story</Button>
              </CardActions>
            </Card>
          )
        })}
      </div> */}
    </div>
  )
}

export default HomePage
