import { Test, TestingModule } from '@nestjs/testing';
import { RyanService } from './ryan.service';

describe('RyanService', () => {
  let provider: RyanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RyanService],
    }).compile();

    provider = module.get<RyanService>(RyanService);
  });

  it('shold return ryan', () => {
    const result = provider.getRyan();

    expect(result).toHaveProperty('name');
    expect(result.name).toBe('ryan');
  });
});
