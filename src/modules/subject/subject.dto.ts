import { IsString } from "class-validator";

export class SubjectDTO {
  @IsString()
  public name: string;
}
