import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { DocumentService } from './document.service';
import { Public } from '../auth/public.decorator';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Roles('president', 'treasurer')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createDocumentDto: { document: string; fileName?: string; date: string; description?: string; category: string }) {
    return this.documentService.create(createDocumentDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.documentService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.documentService.findOne(id);
  }

  @Roles('president', 'treasurer')
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDocumentDto: { document?: string; fileName?: string; date?: string; description?: string; category?: string }) {
    return this.documentService.update(id, updateDocumentDto);
  }

  @Roles('president', 'treasurer')
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.documentService.remove(id);
  }
}
