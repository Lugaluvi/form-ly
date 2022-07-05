import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  difficulties: JSON;

  @Column()
  difficultiesMotives: JSON;

  @Column()
  generalObservations: string;

  @Column()
  behaviourAttitudes: string;

  @OneToOne((type) => Student, (student) => student.id)
  students: Student[];

  @OneToOne((type) => Teacher, (teacher) => teacher.id)
  Teachers: Teacher[];
}
