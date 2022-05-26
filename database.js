// const Admin = require("./app/models/admin");
// const Student = require("./app/models/student");
// const Resume = require("./app/models/resume");
// const Teacher = require("./app/models/teacher");
// const Responsible = require("./app/models/responsible");
// const Team = require("./app/models/team");
// const Subject = require("./app/models/subject");

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

const Admin = sequelize.define("Admin", {
  id: {
    type: Sequelize.STRING,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Responsible = sequelize.define("Responsible", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

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

const Student = sequelize.define("Student", {
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

const Subject = sequelize.define("Subject", {
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

const Teacher = sequelize.define("Teacher", {
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
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  resumeActivities: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Team = sequelize.define("Team", {
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

Responsible.hasOne(Student);
Resume.belongsTo(Student);
Resume.belongsTo(Teacher);
Student.belongsTo(Responsible);
Student.belongsTo(Team);
Student.belongsTo(Subject);
Student.hasMany(Resume);
Subject.hasMany(Teacher);
Subject.hasMany(Student);
Team.hasMany(Teacher);
Team.hasMany(Student);

module.exports = {
  sequelize: sequelize,
  Admin: Admin,
  Student: Student,
  Resume: Resume,
  Teacher: Teacher,
  Responsible: Responsible,
  Team: Team,
  Subject: Subject,
};
