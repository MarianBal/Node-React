const User = require('./../models/users');

module.exports = {
  index: async () => await User.find({}),

  newUser: async user => {
    const newUser = new User(user);
    const saveUser = await newUser.save();
    return saveUser;
  },

  deleteUser: async id => await User.findOneAndRemove(id, { new: true }),

  editUser: async (userId, changes) => {
    const foundUser = await User.findById(userId);

    const update = {};
    for (let field in changes) {
      if (changes[field] !== foundUser[field]) update[field] = changes[field];
    }
    return await User.updateOne({ _id: userId }, update, {
      new: true
    });
  },

  findById: async id => await User.findById(id),

  findUser: async data => await User.find(data)
};
