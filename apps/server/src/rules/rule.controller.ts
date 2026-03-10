import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RuleService } from './rule.service';
import { Public } from '../auth/public.decorator';

@Controller('rules')
export class RuleController {
  constructor(private readonly ruleService: RuleService) {}

  @Post()
  create(@Body() createRuleDto: { category: string; rule: string; icon?: string }) {
    return this.ruleService.create(createRuleDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.ruleService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ruleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRuleDto: { category?: string; rule?: string; icon?: string }) {
    return this.ruleService.update(id, updateRuleDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ruleService.remove(id);
  }
}

