import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateImoveiDto } from './dto/create-imovei.dto';
import { UpdateImoveiDto } from './dto/update-imovei.dto';
import { config, map } from 'rxjs';
import { ConfigService } from '@nestjs/config';

const headerRequest = {
  'Content-Type': 'application/json',
  'chave': 'xkQRh4jCVBD2itxUrU6MjWionfGHB0K0qIpEbUX0M0o=',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*'
}

// const data = { "finalidade": "1", "numeroPagina": "2", "numeroRegistros": "2" }

@Injectable()
export class ImoveisService {
  constructor(private readonly http: HttpService, private readonly configService: ConfigService) { }

  headerRequest = {
    'Content-Type': 'application/json',
    'chave': this.configService.get('CHAVE'),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
  }

  create(createImoveiDto: CreateImoveiDto) {
    return 'This action adds a new imovei';
  }

  async findAll(todosImoveisDto) {
    return this.http.post('https://api.imoview.com.br/Imovel/RetornarImoveisDisponiveis', todosImoveisDto, { headers: headerRequest }).pipe(
      map(res => res.data)
    )
  }

  findOne(id: number) {
    const data = { "codigoImovel": id }
    return this.http.post('https://api.imoview.com.br/Imovel/RetornarDetalhesImovelDisponivel', data, { headers: headerRequest }).pipe(
      map(res => res.data)
    )
  }

  update(id: number, updateImoveiDto: UpdateImoveiDto) {
    return `This action updates a #${id} imovei`;
  }

  remove(id: number) {
    return `This action removes a #${id} imovei`;
  }
}
