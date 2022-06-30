import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Admin } from "../entity/Admin";

export class AdminController {
  private adminRepository = getRepository(Admin);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.adminRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.adminRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.adminRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let adminToRemove = await this.adminRepository.findOneBy({
      id: request.params.id,
    });
    await this.adminRepository.remove(adminToRemove);
  }
}
