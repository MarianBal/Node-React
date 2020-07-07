const express = require('express');
const router = express.Router();
const {
  index,
  newUser,
  deleteUser,
  editUser,
  findById,
  findUser
} = require('../controllers/controllers');

router
  .get('/', index)
  .post('/', newUser)
  .delete('/:userId', deleteUser)
  .put('/edit/:userId', editUser)
  .get('/:userId', findById)
  .post('/find', findUser);

module.exports = router;
