const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  allowComments: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  isAnonymous: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  createdAt: {
    type: Sequelize.DATE
  }
})

module.exports = Post
