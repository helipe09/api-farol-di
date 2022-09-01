import { FilesModule } from 'src/files/files.module';
import { FilesService } from 'src/files/files.service';
import { Module } from '@nestjs/common';
import { PermutaService } from './permuta.service';
import { PermutaController } from './permuta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permuta } from './entities/permuta.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Permuta]),
    FilesModule
  ],
  controllers: [PermutaController],
  providers: [PermutaService]
})
export class PermutaModule { }
