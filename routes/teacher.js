var express = require("express");
var router = express.Router();
var db = require("../database");

router.get("/all", function (req, res) {
  db.Teacher.findAll()
    .then((teachers) => {
      res.status(200).send(JSON.stringify(teachers));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.get("/:id", function (req, res) {
  db.Teacher.findByPk(req.params.id)
    .then((teacher) => {
      res.status(200).send(JSON.stringify(teacher));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.put("/", function (req, res) {
  db.Teacher.create({
    registration: req.body.registration,
    firstName: req.body.firstName,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    description: req.body.description,
    resumeActivities: req.body.resumeActivities,
    password: req.body.password,
    id: req.body.id,
  })
    .then((teacher) => {
      res.status(200).send(JSON.stringify(teacher));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.patch("/", function (req, res) {
  db.Teacher.update({
    registration: req.body.registration,
    firstName: req.body.firstName,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    description: req.body.description,
    resumeActivities: req.body.resumeActivities,
    password: req.body.password,
    id: req.body.id,
  })
    .then((teacher) => {
      res.status(200).send(JSON.stringify(teacher));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.delete("/:id", function (req, res) {
  db.Teacher.destroy({
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
