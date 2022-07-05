import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { NamingStrategyService } from './naming-strategy.service';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  public async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const options = await getConnectionOptions();

    return {
      ...options,
      logging: ['error', 'warn', 'schema', 'migration', 'info'],
      namingStrategy: new NamingStrategyService('custom-naming-strategy'),
    };
  }
}
