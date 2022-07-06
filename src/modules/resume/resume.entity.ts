import {
  Column,
  CreateDateColumn,
  Entity, PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public title: string;

  @Column()
  public difficulty: string;

  @Column()
  public difficultyMotive: string;

  @Column()
  public generalObservations: string;

  @Column()
  public behaviourAndAttitudes: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
