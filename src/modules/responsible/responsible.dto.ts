import { IsString } from 'class-validator';

export class ResponsibleDTO {
  @IsString()
  public name: string;

  @IsString()
  public email: string;

  @IsString()
  public phone: string;
}
