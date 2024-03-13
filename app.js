const express = require('express');

const app = express();

const usersRoute = require('./routes/users');

const cardsRoute = require('./routes/cards');

const { PORT = 3000 } = process.env;

app.use(cardsRoute);
app.use(usersRoute);
app.use((req, res) => {
  res.status(404).send({ message: 'A solicitação não foi encontrada' });
});
app.use((req, res) => {
  res.status(500).send({ message: 'Ocorreu um erro interno no servidor' });
});

app.listen(PORT);
