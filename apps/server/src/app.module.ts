import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

import { UsersModule } from './users/users.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { ResidentModule } from './resident/resident.module';
import { FinanceModule } from './finance/finance.module';
import { SettingModule } from './setting/setting.module';
import { RuleModule } from './rules/rule.module';
import { ComplaintModule } from './complaint/complaint.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UsersModule,
    AnnouncementModule,
    ResidentModule,
    FinanceModule,
    SettingModule,
    RuleModule,
    ComplaintModule,
  ],
})
export class AppModule {}
