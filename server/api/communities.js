const router = require('express').Router()
const {Change, User, Community, Comment} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allCommunities = await Community.findAll({
      include: [User, {model: Change, include: Comment}]
    })
    res.json(allCommunities)
  } catch (err) {
    next(err)
  }
})

router.get('/:communityId', async (req, res, next) => {
  try {
    const singleCommunity = await Community.findAll({
      where: {
        id: req.params.communityId
      }
      //   attributes: ['id','title', 'body']
    })
    res.json(singleCommunity)
  } catch (err) {
    next(err)
  }
})

router.get('/subscribed/:userId', async (req, res, next) => {
  try {
    const userSubscriptions = await Community.findAll({
      where: {
        userId: req.params.userId
      }
      //   include: [Comment],
      //   attributes: ['id','title', 'body']
    })
    res.json(userSubscriptions)
  } catch (err) {
    next(err)
  }
})
