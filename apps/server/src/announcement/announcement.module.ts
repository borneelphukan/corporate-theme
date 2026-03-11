import { Module } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementController } from './announcement.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule],
  providers: [AnnouncementService],
  controllers: [AnnouncementController],
})
export class AnnouncementModule {}
