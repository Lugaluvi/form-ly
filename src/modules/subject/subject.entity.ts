import {
  Column,
  CreateDateColumn,
  Entity, PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public name: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
