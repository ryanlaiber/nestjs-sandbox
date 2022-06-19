import { Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { RyanController } from './ryan.controller';
import { RyanService } from './shared/ryan.service';

const testRyan = {
  name: 'ryanTeste',
  age: 28,
  job: 'web developer',
};

@Injectable()
class fakeRyanService {
  logRyan() {
    console.log('ryan');
  }

  getRyan() {
    return testRyan;
  }
}

describe('RyanController', () => {
  let controller: RyanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RyanController],
    })
      .useMocker((token) => {
        if (token === RyanService) {
          return new fakeRyanService();
        }
      })
      .compile();

    controller = module.get<RyanController>(RyanController);
  });

  it('shold return ryan teste object', () => {
    const result = controller.getRyan();

    expect(result).toStrictEqual(testRyan);
  });
});
