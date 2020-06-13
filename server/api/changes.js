const router = require('express').Router()
const {Change} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const changes = await Change.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(changes)
  } catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//     try {
//       const newChange = await Change.create({

//       })
//       res.json(newChange)
//     } catch (err) {
//       next(err)
//     }
//   })
