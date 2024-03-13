const router = require("express").Router();
const fs = require("fs");
const path = require("path");

router.get("/users", (req, res) => {
  const userPath = path.join(__dirname, "../data/users.json");
  fs.readFile(userPath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
  });
});

router.get("/users/:id", (req, res) => {
  const userPath = path.join(__dirname, "../data/users.json");
  fs.readFile(userPath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.error(err);
    }
    const userId = JSON.parse(data);
    const selectUser = userId.find((user) => user._id === req.params.id);
    if (!selectUser) {
      res.status(404).send({ message: "ID do usuário não encontrado" });
    } else {
      res.send(selectUser);
    }
  });
});

module.exports = router;
