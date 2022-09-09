const User = require('./user');
const Review = require('./review');
const Category = require('./category');
const Listing = require('./listing');

User.hasMany(Review, {
  foreignKey: 'user_id',
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'reviewer',
});

User.hasMany(Review, {
  foreignKey: 'reviewee_id',
});

Review.belongsTo(User, {
  foreignKey: 'reviewee_id',
  as: 'reviewee',
});

User.hasMany(Listing, {
  foreignKey: 'user_id',
});

Listing.belongsTo(User, {
  foreignKey: 'user_id',
});

Category.hasMany(Listing, {
  foreignKey: 'category_id',
});

Listing.belongsTo(Category, {
  foreignKey: 'category_id',
});

module.exports = {
  User,
  Review,
  Category,
  Listing,
};
