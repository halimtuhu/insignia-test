import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateContactDto } from './dto/createContact.dto';

@Injectable()
export class ContactService {
  constructor(private databaseService: DatabaseService) {}

  async getContacts() {
    return this.databaseService.contact.findMany();
  }

  async createContact(data: CreateContactDto) {
    const contact = await this.databaseService.contact.findUnique({
      where: { phoneNumber: data.phoneNumber },
    });

    if (contact) {
      throw new BadRequestException(
        'Contact with those phoneNumber already exists!'
      );
    }

    return this.databaseService.contact.create({ data });
  }
}
