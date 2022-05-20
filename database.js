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

const Admin = require("./app/models/admin");
const Student = require("./app/models/student");
const Resume = require("./app/models/resume");
const Teacher = require("./app/models/teacher");
const Responsible = require("./app/models/responsible");
const Team = require("./app/models/team");
const Subject = require("./app/models/subject");

module.exports = {
  sequelize: sequelize,
  Admin: Admin,
  Student: Student,
  Resume: Resume,
  Teacher: Teacher,
  Responsible: Responsible,
  Team: Team,
  Subject: Subject
};
