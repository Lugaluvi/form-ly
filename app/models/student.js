const Sequelize = require("sequelize");
const Responsible = require("responsible");
const Resume = require("resume");
const Class = require("class");
const Subject = require("subject");

const Student = Sequelize.define("Student", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  registration: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Student.belongsTo(Responsible);
Student.belongsTo(Class);
Student.belongsTo(Subject);
Student.hasMany(Resume);

module.exports = Student;
