import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherController } from './teacher.controller';
import { Teacher } from './teacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  controllers: [TeacherController],
})
export class TeacherModule {}
