const router = require('express').Router()
const {Change, User, Community, Comment} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allComments = await Comment.findAll({
      include: [
        Change
        // {model: User}
      ]
    })
    res.json(allComments)
  } catch (err) {
    next(err)
  }
})

router.get('/:commentId', async (req, res, next) => {
  try {
    const singleComment = await Comment.findAll({
      where: {
        id: req.params.commentId
      },
      include: [
        Change
        // {model: User}
      ]
      //   attributes: ['id','title', 'body']
    })
    res.json(singleComment)
  } catch (err) {
    next(err)
  }
})

router.get('/from/:userId', async (req, res, next) => {
  try {
    const userComments = await Comment.findAll({
      where: {
        userId: req.params.userId
      },
      include: [Change, {model: User}]
    })
    res.json(userComments)
  } catch (err) {
    next(err)
  }
})

router.get('/on/:changeId', async (req, res, next) => {
  try {
    const changeComments = await Change.findAll({
      where: {
        id: req.params.changeId
      },
      include: [{model: Comment}]
    })
    res.json(changeComments)
  } catch (error) {
    next(error)
  }
})

router.post('/add/:changeId', async (req, res, next) => {
  try {
    const newComment = await Comment.create({
      changeId: req.params.changeId,
      body: req.body.body,
      userId: req.body.userId // send userId in body or use req.sessions.passport.user
    })
    const getNewComment = await Comment.findOne({
      where: {
        id: newComment.id
      },
      include: [{model: User}]
    })

    res.status(201).json(getNewComment)
  } catch (error) {
    next(error)
  }
})

router.delete('/:commentId', async (req, res, next) => {
  try {
    const removeComment = await Comment.destroy({
      where: {
        id: req.params.commentId
      }
    })
    res.status(200).json(removeComment)
  } catch (error) {
    next(error)
  }
})
