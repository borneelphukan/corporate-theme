import { Module } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { FinanceController } from './finance.controller';
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
  providers: [FinanceService],
  controllers: [FinanceController],
})
export class FinanceModule {}
