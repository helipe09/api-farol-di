import { ApiProperty } from '@nestjs/swagger';

export class TodosImoveisDto {
    @ApiProperty()
    finalidade: string;

    @ApiProperty()
    numeroPagina: string;

    @ApiProperty()
    numeroRegistros: string;

    @ApiProperty()
    codigoTipo?: string

    @ApiProperty()
    estado?: string;

    @ApiProperty()
    codigocidade?: string;

    @ApiProperty()
    codigoregiao?: string;

    @ApiProperty()
    codigosbairros?: string;

    @ApiProperty()
    numeroquartos?: string;

    @ApiProperty()
    numerovagas?: string;

    @ApiProperty()
    numerobanhos?: string;

    @ApiProperty()
    numerosuite?: string;


}