import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

import { UserModule } from './user/user.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { ResidentModule } from './resident/resident.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UserModule,
    AnnouncementModule,
    ResidentModule,
  ],
})
export class AppModule {}
