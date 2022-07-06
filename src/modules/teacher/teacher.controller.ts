import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeacherDTO } from './teacher.dto';
import { Teacher } from './teacher.entity';

@Controller('teacher')
export class TeacherController {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  @Get()
  public findAll(): Promise<Teacher[]> {
    return this.teacherRepository.find();
  }

  @Get(':id')
  public find(@Param('id') id: string): Promise<Teacher> {
    return this.teacherRepository.findOne(id);
  }

  @Post()
  public create(@Body() teacher: TeacherDTO): Promise<Teacher> {
    return this.teacherRepository.save({ ...teacher });
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() teacher: TeacherDTO,
  ): Promise<Teacher> {
    const entity = await this.teacherRepository.findOneOrFail({ where: { id } });

    return this.teacherRepository.save({ ...teacher, id: entity.id });
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    const entity = await this.teacherRepository.findOneOrFail({ where: { id } });

    return this.teacherRepository.remove(entity);
  }
}
