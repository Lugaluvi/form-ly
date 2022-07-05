import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminDTO } from './admin.dto';
import { Admin } from './admin.entity';

@Controller('admin')
export class AdminController {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  @Get()
  public findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  @Get(':id')
  public find(@Param('id') id: string): Promise<Admin> {
    return this.adminRepository.findOne(id);
  }

  @Post()
  public create(@Body() admin: AdminDTO): Promise<Admin> {
    return this.adminRepository.save({ ...admin });
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() admin: AdminDTO,
  ): Promise<Admin> {
    const entity = await this.adminRepository.findOneOrFail({ where: { id } });

    return this.adminRepository.save({ ...admin, id: entity.id });
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    const entity = await this.adminRepository.findOneOrFail({ where: { id } });

    return this.adminRepository.remove(entity);
  }
}
