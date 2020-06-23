const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('assets'));

const port = 4000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {});

const userSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  address: String
});

userSchema.methods.speak = function () {
  const greeting = this.name
    ? 'Hello, my name is ' + this.name
    : "I don't have a name";
  console.log(greeting);
};

const User = mongoose.model('User', userSchema);

app.all('/', (req, res, next) => {
  console.log('¡Hello World!');
  next();
});

app.get('/', (req, res) => {
  User.find(function (err, users) {
    if (err) return console.error(err);
    return res.json(users);
  });
});

app.post('/', (req, res) => {
  const newUser = req.body;
  const user = new User({
    name: newUser.name,
    phone: newUser.phone,
    email: newUser.email,
    address: newUser.address
  });

  user.save((err, user) => {
    if (err) return console.error(err);
    user.speak();
  });

  User.find(function (err, users) {
    if (err) return console.error(err);
    return res.json(users);
  });
});

app.delete('/:userId', (req, res) => {
  const id = req.params.userId;

  const removeUser = async () => {
    const response = await User.remove({ _id: id });
    return response.deletedCount;
  };

  removeUser();

  User.find(function (err, users) {
    if (err) return console.error(err);
    return res.json(users);
  });
});

app.put('/:userId/edit', (req, res) => {
  const id = req.params.userId;
  console.log(req.body);

  const editUser = async () => {
    let response = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    });
    await response.save();
    return response;
  };
  editUser();

  User.find(function (err, users) {
    if (err) return console.error(err);
    return res.json(users);
  });
});

// app.get('/search/:search', (req, res) => {
//   const searchUser = req.params.search;

//   const found = users.filter(user => {
//     if (
//       user.name.match(searchUser.toLowerCase()) ||
//       user.email.match(searchUser) ||
//       user.address.match(searchUser) ||
//       user.phone.match(searchUser)
//     ) {
//       return user;
//     }
//     return '';
//   });
//   res.json(found.length ? found : users);
// });

// app.get('/search/', (req, res) => {
//   res.json(users);
// });

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
