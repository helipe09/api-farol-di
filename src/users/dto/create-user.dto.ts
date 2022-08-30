import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    email?: string;

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

export default CreateUserDto;