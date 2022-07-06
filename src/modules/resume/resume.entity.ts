import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Student } from '../student/student.entity';
import { Teacher } from '../teacher/teacher.entity';

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public title: string;

  @Column({ type: 'varchar', nullable: true })
  public difficulties: JSON | null;

  @Column({ type: 'varchar', nullable: true })
  public difficultiesMotives: JSON | null;

  @Column()
  public generalObservations: string | null;

  @Column()
  public behaviourAttitudes: string | null;

  @OneToOne(
    () => Student,
    student => student.id,
  )
  public student: Student;

  @OneToOne(
    () => Teacher,
    teacher => teacher.id,
  )
  public teacher: Teacher;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
