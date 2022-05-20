var express = require("express");
var router = express.Router();
var db = require("../database");

router.get("/:id", function (req, res) {
  db.Responsible.findByPk(req.params.id)
    .then((responsible) => {
      res.status(200).send(JSON.stringify(responsible));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.put("/", function (req, res) {
  db.Responsible.create({
    firstName: req.body.firstName,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  })
    .then((responsible) => {
      res.status(200).send(JSON.stringify(responsible));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.patch("/", function (req, res) {
  db.Responsible.update({
    firstName: req.body.firstName,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  })
    .then((responsible) => {
      res.status(200).send(JSON.stringify(responsible));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.delete("/:id", function (req, res) {
  db.Responsible.destroy({
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
