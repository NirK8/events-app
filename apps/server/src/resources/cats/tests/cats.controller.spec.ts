import { Test, TestingModule } from '@nestjs/testing';

import { CatsController } from '../cats.controller';
import { CatsService } from '../cats.service';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should add a cat', () => {
    const cat = controller.create({});
    expect(cat).toEqual('This action adds a new cat');
  });

  it('should find a cat', () => {
    const cat = controller.findOne('1');
    expect(cat).toEqual('This action returns a #1 cat');
  });

  it('should find all cats', () => {
    const cat = controller.findAll();
    expect(cat).toEqual('This action returns all cats');
  });

  it('should update a cat', () => {
    const cat = controller.update('1', {});
    expect(cat).toEqual('This action updates a #1 cat');
  });

  it('should remove a cat', () => {
    const cat = controller.remove('1');
    expect(cat).toEqual('This action removes a #1 cat');
  });
});
