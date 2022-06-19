import { Injectable } from '@nestjs/common';

export interface GetRyanInterface {
  name: string;
  age: number;
  job: string;
}

@Injectable()
export class RyanService {
  logRyan() {
    console.log('ryan');
  }

  getRyan(): GetRyanInterface {
    return {
      name: 'ryan',
      age: 28,
      job: 'web developer',
    };
  }
}
