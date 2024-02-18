import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateContactDto, UpdateContactDto } from './dto/contact.dto';
import { ApiResponse } from '../api/api.dto';

@UseGuards(AuthGuard)
@Controller('/contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get('/')
  async getContacts() {
    return ApiResponse.success(await this.contactService.getContacts());
  }

  @Post('/')
  async createContact(@Body() data: CreateContactDto) {
    return ApiResponse.success(await this.contactService.createContact(data));
  }

  @Get('/:id')
  async getContact(@Param('id') id: string) {
    const result = await this.contactService.getContactById(id);
    if (!result) throw new NotFoundException('Contact not found!');

    return ApiResponse.success(result);
  }

  @Put('/:id')
  async updateContact(@Param('id') id: string, @Body() data: UpdateContactDto) {
    return ApiResponse.success(
      await this.contactService.updateContact(id, data)
    );
  }

  @Delete('/:id')
  async deleteContact(@Param('id') id: string) {
    return ApiResponse.success(await this.contactService.deleteContact(id));
  }
}
