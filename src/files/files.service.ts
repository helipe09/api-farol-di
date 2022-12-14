import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PublicFile from './publicFiles.entity'
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FilesService {
    constructor(
        @InjectRepository(PublicFile)
        private publicFilesRepository: Repository<PublicFile>,
        private readonly configService: ConfigService
    ) { }

    async uploadPublicFile(dataBuffer: Buffer, filename: string) {
        const s3 = new S3();
        const uploadResult = await s3.upload({
            Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
            Body: dataBuffer,
            Key: `${uuid()}-${filename}`
        })
            .promise();

        const newFile = this.publicFilesRepository.create({
            key: uploadResult.Key,
            url: uploadResult.Location
        });
        await this.publicFilesRepository.save(newFile);
        return newFile;
    }

    async updateFile(id: any, permuta: any) {
        const publicFile = await this.publicFilesRepository.findOneBy(id)
        await this.publicFilesRepository.update(id, {
            ...publicFile,
            permuta
        })
    }
}