import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne((type) => Teacher, (teacher) => teacher.id)
  Teachers: Teacher[];

  @OneToMany((type) => Student, (student) => student.id)
  Students: Student[];
}
