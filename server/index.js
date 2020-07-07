const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('assets'));

const port = 4000;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("we're connected!");
});

//app.use('/users', require('./routes/users'));
app.use(require('./routes/routes'));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

// app.put('/:userId/edit', (req, res) => {
//   const id = req.params.userId;
//   console.log(req.body);

//   const editUser = async () => {
//     let response = await User.findOneAndUpdate({ _id: id }, req.body, {
//       new: true
//     });
//     await response.save();
//     return response;
//   };
//   editUser();

//   User.find(function (err, users) {
//     if (err) return console.error(err);
//     console.log(users);
//     return res.json(users);
//   });
// });

// // app.get('/search/:search', (req, res) => {
// //   const searchUser = req.params.search;

// //   const found = users.filter(user => {
// //     if (
// //       user.name.match(searchUser.toLowerCase()) ||
// //       user.email.match(searchUser) ||
// //       user.address.match(searchUser) ||
// //       user.phone.match(searchUser)
// //     ) {
// //       return user;
// //     }
// //     return '';
// //   });
// //   res.json(found.length ? found : users);
// // });

// // app.get('/search/', (req, res) => {
// //   res.json(users);
// // });
