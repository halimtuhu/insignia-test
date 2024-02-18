import { Module } from '@nestjs/common';
import { ContactGroupController } from './contact-group.controller';
import { ContactGroupService } from './contact-group.service';

@Module({
  controllers: [ContactGroupController],
  providers: [ContactGroupService],
})
export class ContactGroupModule {}
