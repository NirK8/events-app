import { Controller, Get, Query } from '@nestjs/common';
import { Event, ApiResponse } from '@events-app/types';

import { UserEventsService } from './user-events.service';
import { PaginationDto } from './dto/search-query.dto';

@Controller('user-events')
export class UserEventsController {
  constructor(private readonly userEventsService: UserEventsService) {}

  @Get()
  async findAll(
    @Query() paginationQuery: PaginationDto
  ): Promise<ApiResponse<Event>> {
    const { skip, limit } = paginationQuery;
    return this.userEventsService.findAll(Math.max(0, skip), limit);
  }
}
