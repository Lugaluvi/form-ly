import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Responsible } from "../entity/Responsible";

export class ResponsibleController {
  private responsibleRepository = getRepository(Responsible);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.responsibleRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.responsibleRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.responsibleRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let responsibleToRemove = await this.responsibleRepository.findOneBy({
      id: request.params.id,
    });
    await this.responsibleRepository.remove(responsibleToRemove);
  }
}
