import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateContactDto } from './dto/createContact.dto';

@UseGuards(AuthGuard)
@Controller('/contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get('/')
  async getContacts() {
    return {
      message: 'success',
      data: await this.contactService.getContacts(),
    };
  }

  @Post('/')
  async createContact(@Body() data: CreateContactDto) {
    const result = await this.contactService.createContact(data);
    return { message: 'success', data: result };
  }
}
