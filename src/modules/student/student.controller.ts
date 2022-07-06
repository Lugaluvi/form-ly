import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentDTO } from './student.dto';
import { Student } from './student.entity';

@Controller('student')
export class StudentController {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  @Get()
  public findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  @Get(':id')
  public find(@Param('id') id: string): Promise<Student> {
    return this.studentRepository.findOne(id);
  }

  @Post()
  public create(@Body() student: StudentDTO): Promise<Student> {
    return this.studentRepository.save({ ...student });
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() student: StudentDTO,
  ): Promise<Student> {
    const entity = await this.studentRepository.findOneOrFail({ where: { id } });

    return this.studentRepository.save({ ...student, id: entity.id });
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    const entity = await this.studentRepository.findOneOrFail({ where: { id } });

    return this.studentRepository.remove(entity);
  }
}
