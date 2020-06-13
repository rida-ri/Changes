const router = require('express').Router()
const {Change, User, Community, Comment} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allChanges = await Change.findAll({
      include: [User, {model: Comment, include: User}]
    })
    res.json(allChanges)
  } catch (err) {
    next(err)
  }
})

router.get('/:changeId', async (req, res, next) => {
  try {
    const singleChange = await Change.findAll({
      where: {
        id: req.params.changeId
      },
      attributes: ['id', 'title', 'body']
    })
    res.json(singleChange)
  } catch (err) {
    next(err)
  }
})

router.get('/from/:userId', async (req, res, next) => {
  try {
    const userChanges = await Change.findAll({
      where: {
        userId: req.params.userId
      },
      include: [Comment],
      attributes: ['id', 'title', 'body']
    })
    res.json(userChanges)
  } catch (err) {
    next(err)
  }
})

router.get('/in/:communityId', async (req, res, next) => {
  try {
    const community = await Community.findAll({
      where: {
        id: req.params.communityId
      },
      include: [
        Change
        // {model: User, include: Change}
      ]
    })
    // const communityChanges = await Change.findAll({
    //   where: {
    //     communityId: req.params.communityId
    //   }
    // })
    res.json(community)
  } catch (error) {
    next(error)
  }
})
