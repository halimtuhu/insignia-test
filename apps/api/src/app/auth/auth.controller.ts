import { Body, Controller, Post } from '@nestjs/common';
import { SigninDTO } from './dto/signin.dto';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  signin(@Body() data: SigninDTO) {
    return {
      message: 'success',
      data: this.authService.signin(data.email, data.password),
    };
  }
}
