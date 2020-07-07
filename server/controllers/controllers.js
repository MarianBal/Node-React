const {
  index,
  newUser,
  deleteUser,
  editUser,
  findById,
  findUser
} = require('./../functionality/functionality');

module.exports = {
  index: async (req, res) => {
    try {
      const users = await index();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  newUser: async (req, res) => {
    try {
      const user = await newUser(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const response = await deleteUser({ _id: req.params.userId });
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  editUser: async (req, res) => {
    try {
      const updatedUser = await editUser(req.params.userId, req.body);

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  findById: async (req, res) => {
    try {
      const user = await findById(req.params.userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  findUser: async (req, res) => {
    try {
      const user = await findUser(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }
};
