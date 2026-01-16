import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAbout(): string {
    const car : { model: string, ano?:number } = {
      model: 'Toyota',
    }

    const nomeIdade : {[index: string]: number} = {};
    nomeIdade['Gabriel'] = 22;

    car.model = 'Honda';
    return nomeIdade['Gabriel'].toString();
  }
}
