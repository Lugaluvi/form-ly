import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resume } from './resume.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resume])],
})
export class ResumeModule {}
