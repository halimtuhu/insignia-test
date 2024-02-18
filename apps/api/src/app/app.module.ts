import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ContactModule } from './contact/contact.module';
import { ContactGroupModule } from './contact-group/contact-group.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    ContactModule,
    ContactGroupModule,
  ],
})
export class AppModule {}
