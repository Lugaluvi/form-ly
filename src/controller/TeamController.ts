import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Team } from "../entity/Team";

export class TeamController {
  private teamRepository = getRepository(Team);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.teamRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.teamRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.teamRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let teamToRemove = await this.teamRepository.findOneBy({
      id: request.params.id,
    });
    await this.teamRepository.remove(teamToRemove);
  }
}
