import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import EmailModel from './dto/create-email.dto';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) { }

  @Post('imovel-single')
  async sendImovelInfo(@Body() emailDto: EmailModel) {
    const email = await this.emailService.sendSingleImovelEmail(emailDto);
    return email;
  }
}
