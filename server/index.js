const express = require('express');
const app = express();

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

app.all('/', function (req, res, next) {
  console.log('Hola mundo desde un servidor con Express!');
  next();
});

app.get('/', (req, res) => {
  console.log(users);
  res.send(users);
});

app.listen(4000);
