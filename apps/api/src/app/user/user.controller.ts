import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { ApiResponse } from '../api/api.dto';

@UseGuards(AuthGuard)
@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async getUsers() {
    return ApiResponse.success(await this.userService.getUsers());
  }

  @Get('/:id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.getUser(id);
    if (!user) throw new NotFoundException('User not found!');

    return ApiResponse.success(user);
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    const user = await this.userService.getUser(id);
    if (!user) throw new NotFoundException('User not found!');

    return ApiResponse.success(
      await this.userService.updateUser(user.id, data)
    );
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const user = await this.userService.getUser(id);
    if (user) await this.userService.deleteUser(id);

    return ApiResponse.success();
  }
}
