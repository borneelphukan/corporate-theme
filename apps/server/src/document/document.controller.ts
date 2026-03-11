import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DocumentService } from './document.service';
import { Public } from '../auth/public.decorator';

@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

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

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDocumentDto: { document?: string; fileName?: string; date?: string; description?: string; category?: string }) {
    return this.documentService.update(id, updateDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.documentService.remove(id);
  }
}
