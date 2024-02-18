import { Body, Controller, Post } from '@nestjs/common';
import { SigninDTO } from './dto/signin.dto';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../user/dto/createUser.dto';
import { UserService } from '../user/user.service';
import { ApiResponse } from '../api/api.dto';

@Controller('/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @Post('/signin')
  async signin(@Body() data: SigninDTO) {
    return ApiResponse.success(
      await this.authService.signin(data.email, data.password)
    );
  }

  @Post('/signup')
  async signup(@Body() data: CreateUserDTO) {
    return ApiResponse.success(await this.userService.createUser(data));
  }
}
