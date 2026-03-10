import { Controller, Get, Post, Body, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { Public } from '../auth/public.decorator';

@Controller('complaints')
export class ComplaintController {
  constructor(private readonly complaintService: ComplaintService) {}

  @Public()
  @Post()
  create(@Body() createComplaintDto: { name: string; apartment: string; phone_no: string; complaint: string }) {
    return this.complaintService.create(createComplaintDto);
  }

  @Get()
  findAll() {
    return this.complaintService.findAll();
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.complaintService.remove(id);
  }
}

