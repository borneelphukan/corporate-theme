import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingService } from './setting.service';
import { Public } from '../auth/public.decorator';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Public()
  @Get()
  getSettings() {
    return this.settingService.getSettings();
  }

  @Post()
  updateSettings(@Body() data: { monthlyFee?: number; yearlyFee?: number }) {
    return this.settingService.updateSettings(data);
  }
}

