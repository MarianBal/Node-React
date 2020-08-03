const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('assets'));

require('dotenv').config({ path: 'variables.env' });
//const port = 4000;

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
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

app.use(require('./routes/routes'));

app.listen(port, host, () =>
  console.log(`Example app listening on port ${port}!`)
);
