import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../../actions/allActions'
import {Button} from 'react-bootstrap'
import styles from './homePage.module.css'
import Image from '../../../images/splashImage.svg'

const HomePage = () => {
  const isLoggedin = useSelector(state => state.user.id)

  let history = useHistory()
  const ctaHandler = e => {
    if (isLoggedin) {
      history.push('/newChange')
    } else {
      history.push('/signIn')
    }
  }
  const feed = [
    {
      id: 1,
      author: 'Andrew Paulino',
      title: 'First',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor auctor lacus at semper. Fusce dictum quam ante, at tempor augue tincidunt vitae. Aenean vel felis sit amet nibh semper egestas a sed neque. Vivamus auctor purus et rhoncus ultrices. Maecenas pulvinar augue ligula. Cras.'
    },
    {
      id: 2,
      author: 'Alex Javier',
      title: 'Second',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor auctor lacus at semper. Fusce dictum quam ante, at tempor augue tincidunt vitae. Aenean vel felis sit amet nibh semper egestas a sed neque. Vivamus auctor purus et rhoncus ultrices. Maecenas pulvinar augue ligula. Cras.'
    }
  ]
  let user = 'Chase Thorpe'
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.CTAContainer}>
          <div>
            <h2 className={styles.CTAHeader}>Silence is not the answer</h2>
            <p className={styles.CTAText}>
              Let's give the voice back to the people,lets give a platform for
              the disenfranchisedpost your story, make a <span>Change</span>
            </p>
            <Button className={styles.CTAButton}>Post Your Story</Button>
          </div>
          <div className={styles.CTAImage}>
            <img className={styles.Image} src={Image} />
          </div>
        </div>
      </div>
      <div className={styles.SplashFeedContainer}>
        <h2 className={styles.SplashFeedHeader}>Top Changes</h2>
        <div className={styles.SplashFeed}>
          {feed.map(story => {
            return (
              <div className={styles.SplashStory} key={story.id}>
                <div className={styles.Stripe} />
                <div className={styles.SplashContent}>
                  <h3>{story.title}</h3>
                  <p>{story.body}</p>
                  <p className={styles.Author}>Written By, {story.author}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage
