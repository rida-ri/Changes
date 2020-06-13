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
