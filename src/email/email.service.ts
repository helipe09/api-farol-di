import { SendGridService } from '@anchan828/nest-sendgrid';
import { Injectable } from '@nestjs/common';
import EmailModel from './dto/create-email.dto';

@Injectable()
export class EmailService {
  constructor(
    private readonly sendGrid: SendGridService
  ) { }

  async sendSingleImovelEmail(email: EmailModel) {
    const mail = {
      to: email.to,
      from: "contato@nodeintech.com.br",
      templateId: email.templateId,
      dynamicTemplateData: {
        subject: email.dynamicTemplateData.subject,
        name: email.dynamicTemplateData.name,
        token: email.dynamicTemplateData.token,
      },
    };

    await this.sendGrid.send(mail);

  }
}
