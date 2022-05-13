import { Module } from '@nestjs/common';
import { ImoveisService } from './imoveis.service';
import { HttpModule } from '@nestjs/axios';
import { ImoveisController } from './imoveis.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [ImoveisController],
  providers: [ImoveisService]
})
export class ImoveisModule { }
