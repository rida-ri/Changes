const User = require('./user')
const Change = require('./change')
const Comment = require('./comment')
const Community = require('./community')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Change.belongsTo(User)
User.hasMany(Change)

Comment.belongsTo(Change)
Change.hasMany(Comment)

User.hasMany(Comment)
Comment.belongsTo(User)

User.belongsToMany(Community, {
  as: 'subscriber',
  through: 'CommunitySubscribed',
  foreignKey: 'userId'
})
Community.belongsTo(User)
Community.belongsToMany(User, {through: 'CommunitySubscribed'})

Change.belongsTo(Community)
Community.hasMany(Change)

User.belongsToMany(User, {
  as: 'supporter',
  through: 'support',
  foreignKey: 'userId'
})

User.belongsToMany(User, {
  as: 'supporting',
  through: 'support',
  foreignKey: 'supporterId'
})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Change,
  Comment,
  Community
}
