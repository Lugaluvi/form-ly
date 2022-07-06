import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Student } from '../student/student.entity';
import { Teacher } from '../teacher/teacher.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public name: string;

  @OneToMany(
    () => Teacher,
    teacher => teacher.id,
  )
  public teachers: Teacher[];

  @OneToMany(
    () => Student,
    student => student.id,
  )
  public student: Student[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
