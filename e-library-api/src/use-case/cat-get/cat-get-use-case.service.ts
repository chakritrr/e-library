import { Injectable } from '@nestjs/common';
import { CatAbstractRepository } from 'src/core';

@Injectable()
export class CatGetUseCaseService {
  constructor(private readonly catAbstractRepository: CatAbstractRepository) {}

  async getCat() {
    return await this.catAbstractRepository.findAll();
  }
}
