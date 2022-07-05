import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from './database/typeorm-config.module';
import { ExceptionFilterModule } from './exeption-filter/exception-filter.module';

@Module({ imports: [ExceptionFilterModule, TypeOrmConfigModule] })
export class CoreModule {}
