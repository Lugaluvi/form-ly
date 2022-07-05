import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'varchar', nullable: true })
  difficulties: JSON | null;

  @Column({ type: 'varchar', nullable: true })
  difficultiesMotives: JSON | null;

  @Column()
  generalObservations: string | null;

  @Column()
  behaviourAttitudes: string | null;

  @OneToOne((type) => Student, (student) => student.id)
  students: Student[];

  @OneToOne((type) => Teacher, (teacher) => teacher.id)
  Teachers: Teacher[];
}
