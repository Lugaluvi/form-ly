import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Resume } from "../entity/Resume";

export class ResumeController {
  private resumeRepository = getRepository(Resume);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.resumeRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.resumeRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.resumeRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let resumeToRemove = await this.resumeRepository.findOneBy({
      id: request.params.id,
    });
    await this.resumeRepository.remove(resumeToRemove);
  }
}
