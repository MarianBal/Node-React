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

// const user1 = new User({
//   name: 'bruce wayne',
//   phone: '08009991111',
//   email: 'bruce@wayneenterpreises.com',
//   address: 'Gotham City'
// });

// user1.save((err, user1) => {
//   if (err) return console.error(err);
//   //user1.speak();
// });

// const user2 = new User({
//   name: 'ada lovelace',
//   phone: '0554755558',
//   email: 'contacto@gmail.com',
//   address: 'Flores'
// });

// user2.save((err, user2) => {
//   if (err) return console.error(err);
//   //user2.speak();
// });
// const user3 = new User({
//   name: 'grace hopper',
//   phone: '26588833448',
//   email: 'contacto@hotmail.com',
//   address: 'Almagro'
// });

// user3.save((err, user3) => {
//   if (err) return console.error(err);
//   //user3.speak();
// });

app.all('/', (req, res, next) => {
  console.log('¡Hello World!');
  next();
});

app.get('/', (req, res) => {
  User.find(function (err, users) {
    if (err) return console.error(err);
    res.json(users);
  });
});

// app.post('/', (req, res) => {
//   const newUser = req.body;
//   newUser.id = nextId(users);
//   users.push(newUser);
//   res.json(users);
// });

// app.delete('/:userId', (req, res) => {
//   const id = parseInt(req.params.userId);

//   users.filter((user, i) => user.id === id && users.splice(i, 1));

//   res.json(users);
// });

// app.put('/:userId/edit', (req, res) => {
//   const editUser = req.body;
//   const id = parseInt(req.params.userId);

//   users.find(user => {
//     if (id === user.id) {
//       user.name = editUser.name;
//       user.phone = editUser.phone;
//       user.email = editUser.email;
//       user.address = editUser.address;

//       return res.json(users);
//     }

//     return '';
//   });
// });

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
