import { Body, Controller, Post } from '@nestjs/common';
import { SigninDTO } from './dto/signin.dto';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../user/dto/createUser.dto';
import { UserService } from '../user/user.service';

@Controller('/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @Post('/signin')
  async signin(@Body() data: SigninDTO) {
    const result = await this.authService.signin(data.email, data.password);
    return { message: 'success', data: result };
  }

  @Post('/signup')
  async signup(@Body() data: CreateUserDTO) {
    return {
      message: 'success',
      data: await this.userService.createUser(data),
    };
  }
}
