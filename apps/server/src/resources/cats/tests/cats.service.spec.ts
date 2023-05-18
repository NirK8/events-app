import { Test, TestingModule } from '@nestjs/testing';

import { CatsService } from '../cats.service';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should add a cat', () => {
    const cat = service.create({});
    expect(cat).toEqual('This action adds a new cat');
  });

  it('should find a cat', () => {
    const cat = service.findOne(1);
    expect(cat).toEqual('This action returns a #1 cat');
  });

  it('should find all cats', () => {
    const cat = service.findAll();
    expect(cat).toEqual('This action returns all cats');
  });

  it('should update a cat', () => {
    const cat = service.update(1, {});
    expect(cat).toEqual('This action updates a #1 cat');
  });

  it('should remove a cat', () => {
    const cat = service.remove(1);
    expect(cat).toEqual('This action removes a #1 cat');
  });
});
