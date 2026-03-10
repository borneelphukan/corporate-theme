import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { Public } from '../auth/public.decorator';

@Controller('announcements')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Post()
  create(@Body() createAnnouncementDto: { title: string; description: string; date?: string }) {
    return this.announcementService.create({
        ...createAnnouncementDto,
        date: createAnnouncementDto.date ? new Date(createAnnouncementDto.date) : undefined
    });
  }

  @Public()
  @Get()
  findAll() {
    return this.announcementService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.announcementService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAnnouncementDto: { title?: string; description?: string; date?: string }) {
    return this.announcementService.update(id, {
        ...updateAnnouncementDto,
        date: updateAnnouncementDto.date ? new Date(updateAnnouncementDto.date) : undefined
    });
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.announcementService.remove(id);
  }
}

