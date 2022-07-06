import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResumeController } from './resume.controller';
import { Resume } from './resume.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resume])],
  controllers: [ResumeController],
})
export class ResumeModule {}
