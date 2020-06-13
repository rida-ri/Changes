const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('password')
    }
  },
  avatar: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nNlj87HpTXHzYdULAi5DqgHaHa%26pid%3DApi&f=1'
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  supporterCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  supportingCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING
  }
})

User.prototype.increaseSupporters = async function() {
  const newSupporterCount = this.supporterCount + 1
  await this.update({supporterCount: newSupporterCount})
}

User.prototype.decreaseSupporters = async function() {
  const newSupporterCount = this.supporterCount - 1
  await this.update({supporterCount: newSupporterCount})
}

User.prototype.increaseSupporting = async function() {
  const newSupoortingCount = this.supportingCount + 1
  await this.update({supportingCount: newSupoortingCount})
}

User.prototype.decreaseSupporting = async function() {
  const newSupportingCount = this.supportingCount + 1
  await this.update({supportingCount: newSupportingCount})
}

module.exports = User

User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}

User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)
User.beforeBulkCreate(users => {
  users.forEach(setSaltAndPassword)
})
