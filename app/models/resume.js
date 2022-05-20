const Sequelize = require("sequelize");
const Student = require("student");
const Teacher = require("teacher");

const Resume = Sequelize.define("Resume", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  difficulties: {
    type: Sequelize.ARRAY,
    allowNull: false,
  },
  difficultiesMotives: {
    type: Sequelize.ARRAY,
    allowNull: false,
  },
  generalObservations: {
    type: Sequelize.ARRAY,
    allowNull: false,
  },
  behaviourAttitudes: {
    type: Sequelize.ARRAY,
    allowNull: false,
  },
});

Resume.belongsTo(Student);
Resume.belongsTo(Teacher);

module.exports = Resume;
