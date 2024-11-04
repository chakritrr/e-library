import { Injectable } from '@nestjs/common';

import { CatAbstractRepository } from 'src/core';
import { PostcatRequestDto } from 'src/core/dtos';

@Injectable()
export class CatCreateUseCase {
  constructor(private readonly catAbstractRepository: CatAbstractRepository) {}

  async createCat(postcatRequestDto: PostcatRequestDto) {
    return await this.catAbstractRepository.create(postcatRequestDto);
  }
}
