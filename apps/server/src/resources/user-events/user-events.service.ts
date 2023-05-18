import { Injectable } from '@nestjs/common';
import { CreateUserEventDto } from './dto/create-user-event.dto';
import { UpdateUserEventDto } from './dto/update-user-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserEvent } from './schemas/user-event.schema';
import { Model } from 'mongoose';
import { readFile } from 'fs/promises';

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

  create(createUserEventDto: CreateUserEventDto) {
    return 'This action adds a new userEvent';
  }

  findAll() {
    return `This action returns all userEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userEvent`;
  }

  update(id: number, updateUserEventDto: UpdateUserEventDto) {
    return `This action updates a #${id} userEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} userEvent`;
  }
}
