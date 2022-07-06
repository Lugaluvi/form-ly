import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubjectDTO } from './subject.dto';
import { Subject } from './subject.entity';

@Controller('subject')
export class SubjectController {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  @Get()
  public findAll(): Promise<Subject[]> {
    return this.subjectRepository.find();
  }

  @Get(':id')
  public find(@Param('id') id: string): Promise<Subject> {
    return this.subjectRepository.findOne(id);
  }

  @Post()
  public create(@Body() subject: SubjectDTO): Promise<Subject> {
    return this.subjectRepository.save({ ...subject });
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() subject: SubjectDTO,
  ): Promise<Subject> {
    const entity = await this.subjectRepository.findOneOrFail({ where: { id } });

    return this.subjectRepository.save({ ...subject, id: entity.id });
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    const entity = await this.subjectRepository.findOneOrFail({ where: { id } });

    return this.subjectRepository.remove(entity);
  }
}
