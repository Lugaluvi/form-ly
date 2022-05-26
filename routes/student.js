var express = require("express");
var router = express.Router();
var db = require("../database");

router.get("/all", function (req, res) {
  db.Student.findAll()
    .then((students) => {
      res.status(200).send(JSON.stringify(students));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.get("/:id", function (req, res) {
  db.Student.findByPk(req.params.id)
    .then((student) => {
      res.status(200).send(JSON.stringify(student));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.put("/", function (req, res) {
  db.Student.create({
    registration: req.body.registration,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    id: req.body.id,
  })
    .then((student) => {
      res.status(200).send(JSON.stringify(student));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.patch("/", function (req, res) {
  db.Student.update({
    registration: req.body.registration,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    id: req.body.id,
  })
    .then((student) => {
      res.status(200).send(JSON.stringify(student));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.delete("/:id", function (req, res) {
  db.Student.destroy({
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
