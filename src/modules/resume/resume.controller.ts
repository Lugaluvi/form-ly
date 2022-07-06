import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResumeDTO } from './resume.dto';
import { Resume } from './resume.entity';

@Controller('resume')
export class ResumeController {
  constructor(
    @InjectRepository(Resume)
    private resumeRepository: Repository<Resume>,
  ) {}

  @Get()
  public findAll(): Promise<Resume[]> {
    return this.resumeRepository.find();
  }

  @Get(':id')
  public find(@Param('id') id: string): Promise<Resume> {
    return this.resumeRepository.findOne(id);
  }

  @Post()
  public create(@Body() resume: ResumeDTO): Promise<Resume> {
    return this.resumeRepository.save({ ...resume });
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() resume: ResumeDTO,
  ): Promise<Resume> {
    const entity = await this.resumeRepository.findOneOrFail({ where: { id } });

    return this.resumeRepository.save({ ...resume, id: entity.id });
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    const entity = await this.resumeRepository.findOneOrFail({ where: { id } });

    return this.resumeRepository.remove(entity);
  }
}
