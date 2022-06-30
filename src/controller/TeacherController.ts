import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Teacher } from "../entity/Teacher";

export class TeacherController {
  private teacherRepository = getRepository(Teacher);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.teacherRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.teacherRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.teacherRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let teacherToRemove = await this.teacherRepository.findOneBy({
      id: request.params.id,
    });
    await this.teacherRepository.remove(teacherToRemove);
  }
}
