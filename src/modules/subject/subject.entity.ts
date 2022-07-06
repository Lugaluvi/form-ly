import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Student } from '../student/student.entity';
import { Teacher } from '../teacher/teacher.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public name: string;

  @OneToOne(
    () => Teacher,
    teacher => teacher.id,
  )
  public teacher: Teacher;

  @OneToMany(
    () => Student,
    student => student.id,
  )
  public students: Student[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
