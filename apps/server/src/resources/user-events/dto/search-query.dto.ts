import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { EventType, Pagination } from '@events-app/types';

export class PaginationDto implements Pagination {
  @IsNumber({}, { message: 'Skip must be a number' })
  @Min(0, { message: 'Skip must be greater than or equal to 0' })
  skip: number;
  @IsNumber({}, { message: 'Skip must be a number' })
  @IsPositive({ message: 'Limit must be greater than 0' })
  limit: number;
  @IsString({ each: true })
  @IsOptional()
  eventTypes = Object.values(EventType);
}
