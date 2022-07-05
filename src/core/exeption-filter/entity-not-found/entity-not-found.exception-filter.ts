import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';

@Catch(EntityNotFoundError)
export class EntityNotFoundExceptionFilter implements ExceptionFilter {
  public catch(exception: EntityNotFoundError, host: ArgumentsHost): Response {
    const { getResponse } = host.switchToHttp();
    const response = getResponse<Response>();

    return response.status(404).json({
      message: {
        statusCode: 404,
        error: 'Not Found',
        message: exception.message,
      },
    });
  }
}
