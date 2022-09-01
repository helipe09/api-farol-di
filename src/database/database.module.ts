import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: "postgres",
                host: configService.get('POSTGRES_HOST') || 'http://ec2-3-14-148-24.us-east-2.compute.amazonaws.com',
                port: configService.get('POSTGRES_PORT') || 5432,
                username: configService.get('POSTGRES_USER') || 'admin',
                password: configService.get('POSTGRES_PASSWORD') || 'admin',
                database: configService.get('POSTGRES_DB') || 'api-farol-di-postgres',
                entities: [__dirname + '/../**/*.entity.{js,ts}'],
                synchronize: true,
                // ssl: { rejectUnauthorized: false },
            })
        }),
    ],
})
export class DatabaseModule { }