import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private databaseService: DatabaseService) {}

  async getUsers() {
    return await this.databaseService.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        emailVerifiedAt: true,
        lastActivityAt: true,
      },
    });
  }

  async createUser(data: CreateUserDTO) {
    const existingUser = await this.databaseService.user.findFirst({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new BadRequestException({
        message: 'User with those email exists!',
      });
    }

    return await this.databaseService.user.create({
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
        password: await hash(data.password, 10),
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        emailVerifiedAt: true,
        lastActivityAt: true,
      },
    });
  }

  async getUser(id: string) {
    return await this.databaseService.user.findFirst({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        emailVerifiedAt: true,
        lastActivityAt: true,
      },
    });
  }
}
