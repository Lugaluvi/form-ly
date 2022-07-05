import { IsString } from 'class-validator';

export class AdminDTO {
  @IsString()
  public name: string;

  @IsString()
  public email: string;

  @IsString()
  public password: string;
}
