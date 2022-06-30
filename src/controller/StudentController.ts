import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Student } from "../entity/Student";

export class StudentController {
  private studentRepository = getRepository(Student);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.studentRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.studentRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.studentRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let studentToRemove = await this.studentRepository.findOneBy({
      id: request.params.id,
    });
    await this.studentRepository.remove(studentToRemove);
  }
}
