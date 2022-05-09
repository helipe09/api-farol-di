import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesService } from './files.service';
import PublicFiles from './publicFiles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PublicFiles]), ConfigModule],
  providers: [FilesService],
  exports: [FilesService]
})
export class FilesModule { }
