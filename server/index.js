const express = require('express');
//const cors = require('cors');

const app = express();
//app.use(cors());
//app.use(express.json());

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
    adress: 'flores'
  },
  {
    id: 3,
    name: 'grace hopper',
    phone: '26588833448',
    email: 'contacto@hotmail.com',
    adress: 'Almagro'
  }
];

app.get('/', (req, res) => {
  console.log(users);
  res.send(users);
});

app.listen(4000);
