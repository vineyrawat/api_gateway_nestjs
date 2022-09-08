import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private client: ClientProxy,
    private authService: AuthService,
  ) {}
  @Get('/ping')
  ping() {
    return this.client.send({ cmd: 'ping' }, {});
  }

  @Get('/user')
  user() {
    return this.authService.createUser({
      email: 'vinayrawat@gmail.com',
      firstName: 'Vinay',
      lastName: 'Rawat',
      password: 'vinayrawat',
    });
  }
}
