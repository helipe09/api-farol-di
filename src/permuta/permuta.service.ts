import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermutaDto } from './dto/create-permuta.dto';
import { UpdatePermutaDto } from './dto/update-permuta.dto';
import { Permuta } from './entities/permuta.entity';

@Injectable()
export class PermutaService {
  constructor(
    @InjectRepository(Permuta)
    private permutaRepository: Repository<Permuta>
  ) { }

  async create(createPermutaDto: CreatePermutaDto) {
    const newPermuta = await this.permutaRepository.create(createPermutaDto);
    await this.permutaRepository.save(newPermuta);
    return newPermuta;
  }

  async findAll() {
    const allPermutas = await this.permutaRepository.find();
    return allPermutas;
  }

  async findTypeAndStatus(params: any) {
    const type = params.type
    const status = params.status
    const permutaFilter = await this.permutaRepository.findOneBy({ status })
    return permutaFilter
  }

  async findOne(id: string): Promise<Permuta | undefined> {
    const singlePermuta = await this.permutaRepository.findOneBy({ id })
    return singlePermuta;
  }

  async update(id: string, updatePermutaDto: UpdatePermutaDto) {
    const updatePermuta = await this.permutaRepository.update(id, updatePermutaDto)
    return updatePermuta;
  }

  async remove(id: string) {
    const removePermuta = await this.permutaRepository.delete(id)
    return removePermuta;
  }
}
