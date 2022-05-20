var express = require("express");
var router = express.Router();
var db = require("../database");

router.get("/:id", function (req, res) {
  db.Team.findByPk(req.params.id)
    .then((Team) => {
      res.status(200).send(JSON.stringify(team));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.put("/", function (req, res) {
  db.Team.create({
    name: req.body.name,
    id: req.body.id,
  })
    .then((team) => {
      res.status(200).send(JSON.stringify(team));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.patch("/", function (req, res) {
  db.Team.update({
    name: req.body.name,
    id: req.body.id,
  })
    .then((team) => {
      res.status(200).send(JSON.stringify(team));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.delete("/:id", function (req, res) {
  db.Team.destroy({
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
