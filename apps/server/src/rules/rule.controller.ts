import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { RuleService } from './rule.service';
import { Public } from '../auth/public.decorator';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('rules')
@UseGuards(RolesGuard)
export class RuleController {
  constructor(private readonly ruleService: RuleService) {}

  @Post()
  @Roles('president')
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
  @Roles('president')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRuleDto: { category?: string; rule?: string; icon?: string }) {
    return this.ruleService.update(id, updateRuleDto);
  }

  @Delete(':id')
  @Roles('president')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ruleService.remove(id);
  }
}

