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
import { AuthGuard } from '../auth/auth.guard';
import { ApiResponse } from '../api/api.dto';
import { ContactGroupService } from './contact-group.service';
import {
  ContactsToGroupDto,
  CreateContactGroupDto,
  UpdateContactGroupDto,
} from './dto/contact-group.dto';

@UseGuards(AuthGuard)
@Controller('/contact-groups')
export class ContactGroupController {
  constructor(private contactGroupService: ContactGroupService) {}

  @Get('/')
  async getContactGroups() {
    return ApiResponse.success(
      await this.contactGroupService.getContactGroups()
    );
  }

  @Post('/')
  async createContactGroup(@Body() data: CreateContactGroupDto) {
    const result = await this.contactGroupService.createContactGroup(data);
    return ApiResponse.success(result);
  }

  @Get('/:id')
  async getContactGroup(@Param('id') id: string) {
    const result = await this.contactGroupService.getContactGroup(id);
    if (!result) throw new NotFoundException('Contact group not found!');

    return ApiResponse.success(result);
  }

  @Put('/:id')
  async updateContactGroup(
    @Param('id') id: string,
    @Body() data: UpdateContactGroupDto
  ) {
    return ApiResponse.success(
      await this.contactGroupService.updateContactGroup(id, data)
    );
  }

  @Delete('/:id')
  async deleteContactGroup(@Param('id') id: string) {
    await this.contactGroupService.deleteContactGroup(id);
    return ApiResponse.success();
  }

  @Post('/:id/contacts')
  async addContactsToGroup(
    @Param('id') id: string,
    @Body() data: ContactsToGroupDto
  ) {
    return ApiResponse.success(
      await this.contactGroupService.addConctacts(id, data.contactIds)
    );
  }

  @Delete('/:id/contacts')
  async removeContactsFromGroup(
    @Param('id') id: string,
    @Body() data: ContactsToGroupDto
  ) {
    return ApiResponse.success(
      await this.contactGroupService.removeContacts(id, data.contactIds)
    );
  }
}
