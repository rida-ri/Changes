import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Button from '@material-ui/core/Button'
import allActions from '../../actions/allActions'

import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

const HomePage = () => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
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
    },
    {
      id: 3,
      title: 'Third',
      body: 'This is the third body'
    },
    {
      id: 4,
      title: 'Fourth',
      body: 'This is the fourth body'
    }
  ]
  return (
    <div className="home_page">
      <h1> This Is the home page! {isLoggedin} </h1>
      <Button variant="contained" color="primary" onClick={e => ctaHandler(e)}>
        Start making changes
      </Button>

      <div id="min-feed">
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
      </div>
    </div>
  )
}

export default HomePage
