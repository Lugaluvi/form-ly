import { IsNumber, IsString } from "class-validator";

export class StudentDTO {
  @IsString()
  public registration: string;

  @IsString()
  public name: string;

  @IsNumber()
  public age: number;
}
