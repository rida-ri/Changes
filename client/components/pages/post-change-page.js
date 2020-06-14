import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../../actions/allActions'
import {Form, Col, Row, Button} from 'react-bootstrap'

const PostChangePage = () => {
  // TODO: Have basic fields to have user input connected with actions/reducers
  // TODO: Hitting the database to add a new post
  // TODO: User Validation, Data Sanitization, NSFW Filter (inapporiate words? api possibly?)
  // TODO: If post is successful to database, please redirect to /Changes
  // TODO: Discuss Split up into multiple components Yes[] or No[]
  // TODO: Show notification on next page to show Change was shared with a link to it (Alert)
  // TODO: Spinner to show User feedback that post is being saved correctly

  // Redirects:
  // CTA: [Submit Button] = /Changes {Authenticated}
  // CTA: [Logout Button] = / {Unauthenticated}
  // Authentication: if (!unauthenticated) => /login

  return (
    <div className="post_change_page">
      <h3>Post your experience to CHANGE the WORLD</h3>
      <Form>
        <Form.Row>
          <Col sm={5} className="my-1">
            <Form.Label>Title of your story....</Form.Label>
            <Form.Control id="inlineFormInputName" />
          </Col>
          <Col xs="3">
            <Form.Check
              label="Tell your story Anonymous?"
              id="custom-switch"
              aria-label="radio 1"
            />
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Label>Write your story below....</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Col>
        </Form.Row>
        <div className="allowComments">
          <Form.Check
            label="Allow Comments?"
            id="custom-switch"
            aria-label="radio 1"
          />
        </div>
        <Button variant="primary" type="submit">
          Post Your Change
        </Button>
      </Form>
    </div>
  )
}

export default PostChangePage
