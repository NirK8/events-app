import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { readFile } from 'fs/promises';
import { Event, ApiResponse } from '@events-app/types';

import { UserEvent } from './schemas/user-event.schema';
import { PaginationDto } from './dto/search-query.dto';

@Injectable()
export class UserEventsService {
  constructor(
    @InjectModel(UserEvent.name) private userEventsModel: Model<UserEvent>
  ) {}

  async initializeDatabase() {
    try {
      const eventsCount = await this.userEventsModel.count();
      if (eventsCount > 0) return;
      console.log('Initializing database...');
      const data = await readFile(__dirname + '/initial_data.json', 'utf8');
      const events = JSON.parse(data);
      await this.userEventsModel.insertMany(events);
      console.log('Database initialized successfully!');
    } catch (err) {
      console.error('Failed to initialize database!');
      throw err;
    }
  }

  async findAll({
    skip,
    limit,
    eventTypes,
  }: PaginationDto): Promise<ApiResponse<Event>> {
    if (eventTypes.length === 0)
      return {
        results: [],
        totalCount: 0,
      };
    const [totalCount, results] = await Promise.all([
      this.userEventsModel
        .find({
          eventType: {
            $in: eventTypes,
          },
        })
        .count(),
      this.userEventsModel
        .find<Event>({
          eventType: {
            $in: eventTypes,
          },
        })
        .sort({ time: -1 })
        .skip(skip)
        .limit(limit + 1)
        .exec(),
    ]);
    const next = results[limit] && {
      skip: Number(limit) + 1, // assigning the value of limit+1 to "next" in case there's an item in that index
      limit,
    };
    results.length = limit; // removing the extra item from the result

    return {
      totalCount,
      results,
      next,
    };
  }
}
