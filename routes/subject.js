var express = require("express");
var router = express.Router();
var db = require("../database");

router.get("/:id", function (req, res) {
  db.Subject.findByPk(req.params.id)
    .then((subject) => {
      res.status(200).send(JSON.stringify(subject));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.put("/", function (req, res) {
  db.Subject.create({
    name: req.body.name,
    id: req.body.id,
  })
    .then((subject) => {
      res.status(200).send(JSON.stringify(subject));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.patch("/", function (req, res) {
  db.Subject.update({
    name: req.body.name,
    id: req.body.id,
  })
    .then((subject) => {
      res.status(200).send(JSON.stringify(subject));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.delete("/:id", function (req, res) {
  db.Subject.destroy({
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
