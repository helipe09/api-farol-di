import { SendGridModule } from '@anchan828/nest-sendgrid';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
    imports: [
        SendGridModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                apikey: configService.get('SEND_GRID_KEY')
            })
        })
    ]
})
export class SendgridModule { }
