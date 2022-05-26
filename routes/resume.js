var express = require("express");
var router = express.Router();
var db = require("../database");

router.get("/all", function (req, res) {
  db.Resume.findAll()
    .then((resumes) => {
      res.status(200).send(JSON.stringify(resumes));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.get("/:id", function (req, res) {
  db.Resume.findByPk(req.params.id)
    .then((resume) => {
      res.status(200).send(JSON.stringify(resume));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.put("/", function (req, res) {
  db.Resume.create({
    title: req.body.title,
    difficulties: req.body.difficulties,
    difficultiesMotives: req.body.difficultiesMotives,
    generalObservations: req.body.generalObservations,
    behaviourAttitudes: req.body.behaviourAttitudes,
  })
    .then((resume) => {
      res.status(200).send(JSON.stringify(resume));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.patch("/", function (req, res) {
  db.Resume.update({
    title: req.body.title,
    difficulties: req.body.difficulties,
    difficultiesMotives: req.body.difficultiesMotives,
    generalObservations: req.body.generalObservations,
    behaviourAttitudes: req.body.behaviourAttitudes,
  })
    .then((resume) => {
      res.status(200).send(JSON.stringify(resume));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.delete("/:id", function (req, res) {
  db.Resume.destroy({
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
