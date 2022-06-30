import "reflect-metadata";
import { DataSource } from "typeorm";
import { Admin } from "./entity/Admin";
import { Responsible } from "./entity/Responsible";
import { Resume } from "./entity/Resume";
import { Student } from "./entity/Student";
import { Subject } from "./entity/Subject";
import { Teacher } from "./entity/Teacher";
import { Team } from "./entity/Team";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Admin, Responsible, Resume, Student, Subject, Teacher, Team],
  migrations: [],
  subscribers: [],
});
