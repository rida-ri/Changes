const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/changes', require('./changes'))
router.use('/comments', require('./comments'))
router.use('/community', require('./communities'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
