import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { EntityNotFoundExceptionFilter } from './entity-not-found/entity-not-found.exception-filter';

@Module({
  providers: [{ useClass: EntityNotFoundExceptionFilter, provide: APP_FILTER }],
})
export class ExceptionFilterModule {}
