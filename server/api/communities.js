const router = require('express').Router()
const {Change, User, Community, Comment} = require('../db/models')
const {findDOMNode} = require('react-dom')
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

router.put('/subscribe/:userId', async (req, res, next) => {
  try {
    const subscribingUser = await User.findOne({
      where: {
        id: req.params.userId
      }
    })

    const subscribingTo = await Community.findOne({
      where: {
        id: req.body.communityId
      }
    })

    subscribingUser.addSubscriber(subscribingTo)
    subscribingTo.subscribers++

    await subscribingUser.save()
    await subscribingTo.save()
    const isSubscribed = await subscribingUser.hasSubscriber(subscribingTo)

    const getSubcribeInfo = await Community.findOne({
      where: {
        id: subscribingTo.id
      },
      include: [{model: User}]
    })

    res.json({profile: getSubcribeInfo, isSubscribed: isSubscribed})
  } catch (error) {
    next(error)
  }
})

router.put('/unsubscribe/:userId', async (req, res, next) => {
  try {
    const unSubscribingUser = await User.findOne({
      where: {
        id: req.params.id
      }
    })

    const unSubscribingFrom = await Community.findOne({
      where: {
        id: req.body.communityId
      }
    })

    unSubscribingUser.removeSubscribe(unSubscribingFrom)
    unSubscribingFrom.subscribers--

    await unSubscribingUser.save()
    await unSubscribingFrom.save()

    const isUnsubscribed = await unSubscribingUser.hasSubscriber(
      unSubscribingFrom
    )

    const getUnscribeInfo = await Community.findOne({
      where: {
        id: unSubscribingFrom.id
      },
      include: [{model: User}]
    })

    res.json({profile: getUnscribeInfo, isUnsubscribed: isUnsubscribed})
  } catch (error) {
    next(error)
  }
})
