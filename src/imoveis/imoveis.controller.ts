import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { ImoveisService } from './imoveis.service';
import { CreateImoveiDto } from './dto/create-imovei.dto';
import { UpdateImoveiDto } from './dto/update-imovei.dto';
import { TodosImoveisDto } from './dto/todos-imoveis.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Imóveis')
@Controller('imoveis')
export class ImoveisController {
  constructor(private readonly imoveisService: ImoveisService) { }

  @Post()
  create(@Body() createImoveiDto: CreateImoveiDto) {
    return this.imoveisService.create(createImoveiDto);
  }

  @HttpCode(200)
  @Post('todos')
  findAll(@Body() todosImoveisDto: TodosImoveisDto) {
    return this.imoveisService.findAll(todosImoveisDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imoveisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImoveiDto: UpdateImoveiDto) {
    return this.imoveisService.update(+id, updateImoveiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imoveisService.remove(+id);
  }
}
