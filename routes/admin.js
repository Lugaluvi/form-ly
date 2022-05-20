var express = require("express");
var router = express.Router();
var db = require("../database");

router.get("/:id", function (req, res) {
  db.Admin.findByPk(req.params.id)
    .then((admin) => {
      res.status(200).send(JSON.stringify(admin));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.put("/", function (req, res) {
  db.Admin.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    id: req.body.id,
  })
    .then((admin) => {
      res.status(200).send(JSON.stringify(admin));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.patch("/", function (req, res) {
  db.Admin.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    id: req.body.id,
  })
    .then((admin) => {
      res.status(200).send(JSON.stringify(admin));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.delete("/:id", function (req, res) {
  db.Admin.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

module.exports = router;
