const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 4000;

const users = [
  {
    id: 1,
    name: 'bruce wayne',
    phone: '08009991111',
    email: 'bruce@wayneenterpreises.com',
    address: 'Gotham City'
  },
  {
    id: 2,
    name: 'ada lovelace',
    phone: '0554755558',
    email: 'contacto@gmail.com',
    address: 'Flores'
  },
  {
    id: 3,
    name: 'grace hopper',
    phone: '26588833448',
    email: 'contacto@hotmail.com',
    address: 'Almagro'
  }
];

const nextId = (e = []) => (e.length ? e[e.length - 1].id + 1 : 1);

app.all('/', (req, res, next) => {
  console.log('¡Hello World!');
  next();
});

app.get('/', (req, res) => {
  res.json(users);
});

app.post('/', (req, res) => {
  const newUser = req.body;
  newUser.id = nextId(users);
  users.push(newUser);
  res.json(users);
});

app.delete('/:userId', (req, res) => {
  const id = parseInt(req.params.userId);

  users.filter((user, i) => user.id === id && users.splice(i, 1));

  res.json(users);
});

app.put('/:userId/edit', (req, res) => {
  const editUser = req.body;
  const id = parseInt(req.params.userId);

  users.find(user => {
    if (id === user.id) {
      user.name = editUser.name;
      user.phone = editUser.phone;
      user.email = editUser.email;
      user.address = editUser.address;

      return res.json(users);
    }

    return '';
  });
});

app.get('/search/:search', (req, res) => {
  const searchUser = req.params.search;

  const found = users.filter(user => {
    if (
      user.name.match(searchUser.toLowerCase()) ||
      user.email.match(searchUser) ||
      user.address.match(searchUser) ||
      user.phone.match(searchUser)
    ) {
      return user;
    }
    return '';
  });
  res.json(found.length ? found : users);
});

app.get('/search/', (req, res) => {
  res.json(users);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
