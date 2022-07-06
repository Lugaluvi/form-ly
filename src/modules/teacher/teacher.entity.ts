import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Resume } from '../resume/resume.entity';
import { Team } from '../team/team.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public phone: string;

  @Column()
  public password: string;

  @OneToMany(
    () => Team,
    team => team.id,
  )
  public teams: Team[];

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
