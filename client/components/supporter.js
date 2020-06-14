import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
import {Carousel, Image} from 'react-bootstrap'

const arrOfSupporters = ['abc', 'def', 'ghi', 'jhk']
const arrOfSupporterting = ['xyx', 'fhs', 'ada', 'njk']

export default function Supporter(props) {
  return (
    <div>
      <div>
        <h3>{props.name}</h3>
      </div>

      <Carousel>
        {(props.name === 'Supporters'
          ? arrOfSupporters
          : arrOfSupporterting
        ).map((supporter, index) => {
          return (
            <Carousel.Item key={index}>
              <Image
                src="https://www.timvandevall.com/wp-content/uploads/2014/03/Circle-Outline.jpg"
                roundedCircle
                alt={supporter}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}
