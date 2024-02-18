import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { DatabaseService } from '../database/database.service';
import { JwtTokenPayloadDTO } from './dto/jwt.dto';

@Injectable()
export class AuthService {
  constructor(
    private databaseService: DatabaseService,
    private jwtService: JwtService
  ) {}

  async signin(email: string, password: string) {
    const user = await this.databaseService.user.findUnique({
      where: { email },
    });
    if (!user)
      throw new UnauthorizedException({
        message: 'Seems like there is no user registered with that email yet.',
      });

    const verify = await compare(password, user.password);
    if (!verify)
      throw new UnauthorizedException({
        message: 'Password or email did not match with our system.',
      });

    const payload = JwtTokenPayloadDTO.mapFromUser(user);
    return { token: this.jwtService.sign(payload) };
  }
}
