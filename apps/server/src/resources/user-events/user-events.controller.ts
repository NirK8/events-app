import { Body, Controller, Post } from '@nestjs/common';
import { Event, ApiResponse } from '@events-app/types';

import { UserEventsService } from './user-events.service';
import { PaginationDto } from './dto/search-query.dto';

@Controller('user-events')
export class UserEventsController {
  constructor(private readonly userEventsService: UserEventsService) {}

  @Post()
  async findAll(
    @Body() paginationDto: PaginationDto
  ): Promise<ApiResponse<Event>> {
    const { skip, limit, eventTypes } = paginationDto;
    return this.userEventsService.findAll({
      skip: Math.max(0, skip),
      limit,
      eventTypes,
    });
  }
}
