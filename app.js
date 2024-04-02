const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/aroundb');

const app = express();
const usersRoute = require('./routes/users');
const cardsRoute = require('./routes/cards');

const { PORT = 3000 } = process.env;

app.use((req, res, next) => {
  req.user = {
    _id: '660c20c2f9d5cc7456256b12',
  };

  next();
});

app.listen(PORT);
app.use(express.json());
app.use(cardsRoute);
app.use(usersRoute);

app.use((req, res) => {
  res.status(404).send({ message: 'A solicitação não foi encontrada' });
});
app.use((req, res) => {
  res.status(500).send({ message: 'Ocorreu um erro interno no servidor' });
});
