import {
  Column,
  CreateDateColumn,
  Entity, PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public registration: string;

  @Column()
  public name: string;

  @Column()
  public age: number;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
