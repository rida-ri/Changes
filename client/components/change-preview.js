import React from 'react'
import {Carousel, Image} from 'react-bootstrap'

const arrOfChanges = ['abc', 'def', 'ghi', 'jhk']
const arrOfSupporterting = ['xyx', 'fhs', 'ada', 'njk']

export default function PreviewChanges(props) {
  return (
    <div>
      <h3>Changes {props.name} </h3>
      {props.props.map((change, index) => {
        return (
          <div key={index}>
            <ChangeSmall props={change} />
          </div>
        )
      })}
    </div>
  )
}

export function ChangeSmall(props) {
  return <div>{props.props.title}</div>
}
