import { PartialType } from '@nestjs/swagger';
import { CreatePermutaDto } from './create-permuta.dto';

export class UpdatePermutaDto extends PartialType(CreatePermutaDto) {}
