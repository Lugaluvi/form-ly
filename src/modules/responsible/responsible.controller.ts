import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponsibleDTO } from './responsible.dto';
import { Responsible } from './responsible.entity';

@Controller('responsible')
export class ResponsibleController {
  constructor(
    @InjectRepository(Responsible)
    private responsibleRepository: Repository<Responsible>,
  ) {}

  @Get()
  public findAll(): Promise<Responsible[]> {
    return this.responsibleRepository.find();
  }

  @Get(':id')
  public find(@Param('id') id: string): Promise<Responsible> {
    return this.responsibleRepository.findOne(id);
  }

  @Post()
  public create(@Body() responsible: ResponsibleDTO): Promise<Responsible> {
    return this.responsibleRepository.save({ ...responsible });
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() responsible: ResponsibleDTO,
  ): Promise<Responsible> {
    const entity = await this.responsibleRepository.findOneOrFail({ where: { id } });

    return this.responsibleRepository.save({ ...responsible, id: entity.id });
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    const entity = await this.responsibleRepository.findOneOrFail({ where: { id } });

    return this.responsibleRepository.remove(entity);
  }
}
