const User = require('./User');
const Post = require('./Post');

Post.belongsTo(User, {
    foreignKey: 'user_id'
  
});

User.hasMany(Post, {
    foreignKy: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Post };