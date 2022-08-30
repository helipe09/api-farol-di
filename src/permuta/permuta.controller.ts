import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { PermutaService } from './permuta.service';
import { CreatePermutaDto } from './dto/create-permuta.dto';
import { UpdatePermutaDto } from './dto/update-permuta.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Permuta')
@Controller('permuta')
export class PermutaController {
  constructor(private readonly permutaService: PermutaService) { }

  @Post()
  create(@Body() createPermutaDto: CreatePermutaDto) {
    return this.permutaService.create(createPermutaDto);
  }

  @Get(':type/:status')
  findTypeAndStatusPermuta(@Param() params: any) {
    return this.permutaService.findTypeAndStatus(params)
  }

  // @Post('photo')
  // @UseInterceptors(FileInterceptor('file'))
  // async addPhoto()

  @Get()
  findAll() {
    return this.permutaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permutaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermutaDto: UpdatePermutaDto) {
    return this.permutaService.update(id, updatePermutaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permutaService.remove(id);
  }
}
