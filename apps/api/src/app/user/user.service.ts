import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { hash } from 'bcrypt';
import { UpdateUserDTO } from './dto/updateUser.dto';

const defaultUserSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true,
  emailVerifiedAt: true,
  lastActivityAt: true,
};

@Injectable()
export class UserService {
  constructor(private databaseService: DatabaseService) {}

  async getUsers() {
    return await this.databaseService.user.findMany({
      select: defaultUserSelect,
    });
  }

  async createUser(data: CreateUserDTO) {
    const existingUser = await this.databaseService.user.findFirst({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new BadRequestException('User with those email exists!');
    }

    return await this.databaseService.user.create({
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
        password: await hash(data.password, 10),
      },
      select: defaultUserSelect,
    });
  }

  async getUser(id: string) {
    return await this.databaseService.user.findFirst({
      where: { id },
      select: defaultUserSelect,
    });
  }

  async updateUser(id: string, data: UpdateUserDTO) {
    return await this.databaseService.user.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
      },
      select: defaultUserSelect,
    });
  }

  async deleteUser(id: string) {
    await this.databaseService.user.delete({ where: { id } });
  }
}
