import { Module } from '@nestjs/common';
import { ResidentService } from './resident.service';
import { ResidentController } from './resident.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { RolesGuard } from '../auth/roles.guard';

@Module({
  imports: [PrismaModule],
  providers: [ResidentService],
  controllers: [ResidentController],
})
export class ResidentModule {}
