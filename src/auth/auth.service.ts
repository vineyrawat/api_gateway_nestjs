import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, of } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE') private client: ClientProxy) {}
  createUser(user) {
    return this.client.send({ cmd: 'user' }, user).pipe(
      catchError((err) => of(err)),
      (value) => of(value),
    );
  }
}
