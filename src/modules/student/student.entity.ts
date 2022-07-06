import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Responsible } from '../responsible/responsible.entity';
import { Resume } from '../resume/resume.entity';
import { Subject } from '../subject/subject.entity';
import { Team } from '../team/team.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public name: string;

  @OneToOne(
    () => Responsible,
    responsible => responsible.id,
  )
  public responsible: Responsible;

  @OneToOne(
    () => Team,
    team => team.id,
  )
  public team: Team;

  @OneToMany(
    () => Subject,
    subject => subject.id,
  )
  public subjects: Subject[];

  @OneToMany(
    () => Resume,
    resume => resume.id,
  )
  public resumes: Resume[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
