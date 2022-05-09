import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    category: string;

    @ApiProperty()
    badge: string;

    @ApiProperty()
    author: string;

    @ApiProperty()
    thumbnail: string;

    @ApiProperty()
    description: string;
}
