const router = require('express').Router()
const {User} = require('../db/models')
const Sequelize = require('sequelize')
const {unstable_renderSubtreeIntoContainer} = require('react-dom')
const {useReducer} = require('react')
const Community = require('../db/models/community')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      include: [
        {model: Community, as: 'subscriber'},
        {model: User, as: 'supporter'},
        {model: User, as: 'supporting'}
      ]
      // attributes: ['id', 'firstName', 'lastName', 'userName', 'email', 'avatar']
    })
    res.json(allUsers)
  } catch (err) {
    next(err)
  }
})

//for search by username
// router.get('/search/:username', async (req, res, next) => {
//   try {
//     const username = req.params.username.toLowerCase()
//     const findUser = await User.findAll({
//       where: {
//         name: Sequelize.where(
//           Sequelize.fn('LOWER', Sequelize.col('userName')),
//           'LIKE',
//           '%' + username + '%'
//         )
//       },
//       attributes: ['userName', 'avatar', 'supporterCount', 'supportingCount']
//     })
//     res.json(findUser)
//   } catch (error) {
//     next(error)
//   }
// })

//byId
// router.get('/:userId', async (req, res, next) => {
//   try {
//     const singleUser = await User.findAll({
//       where: {
//         id : req.params.userId
//       },
//       //attributes: ['id', 'firstName', 'lastName', 'userName','email', 'avatar']
//     })
//     res.json(singleUser)
//   } catch (err) {
//     next(err)
//   }
// })

//by username
// router.get('/:username', async (req, res, next) => {
//   try {
//     const singleUser = await User.findAll({
//       where: {
//         userName : req.params.username
//       },
//       //attributes: ['id', 'firstName', 'lastName', 'userName','email', 'avatar']
//     })
//     res.json(singleUser)
//   } catch (err) {
//     next(err)
//   }
// })

router.put('/:userId', async (req, res, next) => {
  try {
    const updateInfo = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      avatar: req.body.avatar
      //add as you desire
    }
    if (req.body.password) updateInfo.password = req.body.password
    const [updateUser] = await User.update(updateInfo, {
      where: {
        id: req.params.userId
      },
      returning: true
    })

    const updatedUser = await User.findAll({
      where: {
        id: updateUser[0].id
      },
      include: [{model: Community, as: 'subscriber'}]
    })

    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
})

router.put('/follow/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        //Check when updating the params in sessions
        id: req.session.passport.user.id
      }
    })

    const supporting = await User.findOne({
      where: {
        id: req.params.userId
      }
    })

    user.addSupporting(supporting.id)
    user.increaseSupporting()
    supporting.increaseSupporters()

    await user.save()
    await supporting.save()

    const updatedUser = await findOne({
      where: {
        id: req.params.userId
      },
      include: [{model: User, as: 'supporter'}, {model: User, as: 'supporting'}]
    })

    const isSupporting = user.hasSupporting(supporting)

    res.json({profile: user, isSupporting: isSupporting})
  } catch (error) {
    next(error)
  }
})

router.put('/unfollow/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        //Check when updating the params in sessions
        id: req.session.passport.user.id
      }
    })

    const notSupporting = await User.findOne({
      where: {
        id: req.params.userId
      }
    })

    useReducer.removeSupporting(notSupporting.id)
    user.decreaseSupporting()
    notSupporting.decreaseSupporter()

    await user.save()
    await notSupporting.save()

    const updatedUser = await User.findOne({
      where: {
        id: req.params.userId
      },
      include: [{model: User, as: 'supporter'}, {model: User, as: 'supporting'}]
    })

    const isNotSupporting = await user.hasSupporting(updatedUser)

    res.json({profile: updatedUser, isNotSupporting: isNotSupporting})
  } catch (error) {
    next(error)
  }
})

router.delete('/userId', async (req, res, next) => {
  try {
    const deleteUser = await User.findOne({
      where: {
        id: req.params.userId
      }
    })
    if (deleteUser) {
      await deleteUser.destroy()
      res.status(204).send(deleteUser)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})
