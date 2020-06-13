const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email', 'avatar']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// router.get('/:userId', async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       where: {
//         id : req.params.userId
//       }
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })
