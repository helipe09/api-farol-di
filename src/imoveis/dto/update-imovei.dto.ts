import { PartialType } from '@nestjs/swagger';
import { CreateImoveiDto } from './create-imovei.dto';

export class UpdateImoveiDto extends PartialType(CreateImoveiDto) {}
