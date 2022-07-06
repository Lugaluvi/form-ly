import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsibleController } from './responsible.controller';
import { Responsible } from './responsible.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Responsible])],
  controllers: [ResponsibleController],
})
export class ResponsibleModule {}
