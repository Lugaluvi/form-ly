const Sequelize = require("sequelize");
const Teacher = require("teacher");
const Student = require("student");

const Team = Sequelize.define("Team", {
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

Team.hasMany(Teacher);
Team.hasMany(Student);

module.exports = Team;
