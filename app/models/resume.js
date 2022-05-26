const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_SCHEMA || "postgres",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DB_SSL == "true",
    },
  }
);
const Student = require("./student");
const Teacher = require("./teacher");

const Resume = sequelize.define("Resume", {
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
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
  difficultiesMotives: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
  generalObservations: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  behaviourAttitudes: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Resume.belongsTo(Student);
Resume.belongsTo(Teacher);

module.exports = Resume;
