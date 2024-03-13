const express = require("express");
const app = express();

const { PORT = 3000 } = process.env;

const cardsRoute = require("./routes/cards");
const usersRoute = require("./routes/users");

app.use(cardsRoute);
app.use(usersRoute);
app.use((req, res) => {
  res.status(404).send({ message: "A solicitação não foi encontrada" });
});

app.listen(PORT);
