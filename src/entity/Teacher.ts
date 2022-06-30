import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Resume } from "./Resume";
import { Team } from "./Team";

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  registration: string;

  @Column()
  firstName: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  description: string;

  @Column()
  resumeActivities: string;

  @Column()
  password: string;

  @OneToMany((type) => Team, (team) => team.id)
  Teams: Team[];

  @OneToMany((type) => Resume, (resume) => resume.id)
  Resumes: Resume[];
}
