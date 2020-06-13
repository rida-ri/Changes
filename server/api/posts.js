const router = require('express').Router()
const {Post} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(posts)
  } catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//     try {
//       const newPost = await Post.create({

//       })
//       res.json(newPost)
//     } catch (err) {
//       next(err)
//     }
//   })
