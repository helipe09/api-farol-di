import { ApiProperty } from '@nestjs/swagger';
import User from 'src/users/entities/user.entity';

export class CreatePermutaDto {
    @ApiProperty()
    type: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    user: User

    @ApiProperty()
    status: string;
}
