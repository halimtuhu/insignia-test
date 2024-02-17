import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  signin(email: string, password: string): { token: string } {
    const payload = { sub: email, sec: password };
    return { token: this.jwtService.sign(payload) };
  }
}
