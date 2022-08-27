import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, of } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(@Inject('AUTH_SERVICE') private client: ClientProxy) {}
  @Get('/ping')
  ping() {
    return this.client.send({ cmd: 'ping' }, {});
  }

  @Get('/user')
  user() {
    return this.client
      .send(
        { cmd: 'user' },
        {
          email: 'vinayrawat@gmail.com',
          firstName: 'Vinay',
          lastName: 'Rawat',
          password: 'vinayrawat',
        },
      )
      .pipe(catchError((err) => of(err)));
  }
}
