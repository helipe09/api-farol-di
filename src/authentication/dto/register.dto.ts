import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    surname: string;

    @ApiProperty()
    role: string;

    @ApiProperty()
    local: string;

    @ApiProperty()
    password: string;
}