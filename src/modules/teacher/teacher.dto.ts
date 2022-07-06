import { IsString } from 'class-validator';

export class TeacherDTO {
  @IsString()
  public name: string;

  @IsString()
  public email: string;

  @IsString()
  public phone: string;
}
