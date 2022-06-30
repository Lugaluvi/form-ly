import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Teacher, (teacher) => teacher.id)
  Teachers: Teacher[];

  @OneToMany((type) => Student, (student) => student.id)
  Students: Student[];
}
