const Sequelize = require("sequelize");
const Teacher = require("teacher");
const Student = require("student");

const Subject = Sequelize.define("Subject", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Subject.hasMany(Teacher);
Subject.hasMany(Student);

module.exports = Subject;
