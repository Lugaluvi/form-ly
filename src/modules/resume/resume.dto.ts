import { IsString } from 'class-validator';

export class ResumeDTO {
  @IsString()
  public title: string;

  @IsString()
  public difficulty: string;

  @IsString()
  public difficultyMotive: string;

  @IsString()
  public generalObservations: string;

  @IsString()
  public behaviourAndAttitudes: string;
}
