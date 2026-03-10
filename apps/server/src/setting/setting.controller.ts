import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { SettingService } from './setting.service';
import { Public } from '../auth/public.decorator';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Public()
  @Get()
  getSettings(@Query('year') year?: string) {
    return this.settingService.getSettings(year ? parseInt(year) : undefined);
  }

  @Post()
  updateSettings(@Body() data: { year?: number; monthlyFee?: number; yearlyFee?: number }) {
    return this.settingService.updateSettings(data);
  }
}

