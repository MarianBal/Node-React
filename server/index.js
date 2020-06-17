const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: 'bruce wayne',
    phone: '08009991111',
    email: 'bruce@wayneenterpreises.com',
    adress: 'Gotham City'
  },
  {
    id: 2,
    name: 'ada lovelace',
    phone: '0554755558',
    email: 'contacto@gmail.com',
    adress: 'Flores'
  },
  {
    id: 3,
    name: 'grace hopper',
    phone: '26588833448',
    email: 'contacto@hotmail.com',
    adress: 'Almagro'
  }
];

const nextId = (e = []) => (e.length ? e[e.length - 1].id + 1 : 1);

app.all('/', function (req, res, next) {
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

app.listen(4000);
