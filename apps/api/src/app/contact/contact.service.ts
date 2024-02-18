import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateContactDto, UpdateContactDto } from './dto/contact.dto';

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

  async getContactById(id: string) {
    return this.databaseService.contact.findUnique({ where: { id } });
  }

  async updateContact(id: string, data: UpdateContactDto) {
    const contact = await this.databaseService.contact.findUnique({
      where: { id },
    });
    if (!contact) throw new NotFoundException('Contact not found!');

    return this.databaseService.contact.update({
      where: { id: contact.id },
      data,
    });
  }

  async deleteContact(id: string) {
    const contact = await this.databaseService.contact.findUnique({
      where: { id },
    });
    if (contact) await this.databaseService.contact.delete({ where: { id } });
  }
}
