import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Responsible } from "./Responsible";
import { Resume } from "./Resume";
import { Subject } from "./Subject";
import { Team } from "./Team";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  registration: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToOne((type) => Responsible, (responsible) => responsible.id)
  Responsibles: Responsible[];

  @OneToOne((type) => Team, (team) => team.id)
  Teams: Team[];

  @OneToMany((type) => Subject, (subject) => subject.id)
  Subjects: Subject[];

  @OneToMany((type) => Resume, (resume) => resume.id)
  Resumes: Resume[];
}
