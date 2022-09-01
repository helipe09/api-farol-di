import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
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

  @Get('my/:id')
  findMyPermutas(@Param('id') id: any) {

  }

  @Get('status/:status')
  getPermutasPublicadas(@Param('status') status: any) {
    return this.permutaService.getPermutasPublicadas(status)
  }

  @Post('photo/:id')
  @UseInterceptors(FileInterceptor('file'))
  async addPhoto(@Param('id') id: any, @UploadedFile() file: Express.Multer.File) {
    return this.permutaService.addPhoto(id, file.buffer, file.originalname)
  }


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
