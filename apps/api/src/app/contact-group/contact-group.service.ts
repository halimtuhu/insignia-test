import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import {
  CreateContactGroupDto,
  UpdateContactGroupDto,
} from './dto/contact-group.dto';

@Injectable()
export class ContactGroupService {
  constructor(private databaseService: DatabaseService) {}

  async getContactGroups() {
    return await this.databaseService.contactGroup.findMany();
  }

  async createContactGroup(data: CreateContactGroupDto) {
    const contacts = await this.databaseService.contact.findMany({
      where: { id: { in: data.contacts } },
    });
    if (contacts.length <= 0) {
      throw new BadRequestException('No contacts available!');
    }

    return await this.databaseService.contactGroup.create({
      data: {
        name: data.name,
        description: data.description,
        contacts: { connect: contacts.map((contact) => ({ id: contact.id })) },
      },
    });
  }

  async getContactGroup(id: string) {
    return await this.databaseService.contactGroup.findUnique({
      where: { id },
      include: { contacts: true },
    });
  }

  async updateContactGroup(id: string, data: UpdateContactGroupDto) {
    const contactGroup = await this.databaseService.contactGroup.findUnique({
      where: { id },
    });
    if (!contactGroup) {
      throw new NotFoundException('Contact group not found!');
    }

    return await this.databaseService.contactGroup.update({
      where: { id },
      data,
    });
  }

  async deleteContactGroup(id: string) {
    const contactGroup = await this.databaseService.contactGroup.findUnique({
      where: { id },
    });
    if (contactGroup) {
      await this.databaseService.contactGroup.delete({ where: { id } });
    }
  }
}
