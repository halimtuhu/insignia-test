import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/users')
export class UserController {
  @UseGuards(AuthGuard)
  @Get('/')
  getAll() {
    return { message: 'success', data: [] };
  }
}
