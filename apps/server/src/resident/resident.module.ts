import { Module } from '@nestjs/common';
import { ResidentService } from './resident.service';
import { ResidentController } from './resident.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'supersecretjwtkey',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [ResidentService],
  controllers: [ResidentController],
})
export class ResidentModule {}
