import { Injectable } from '@nestjs/common';

import { Cat, CatAbstractRepository } from 'src/core';
import { PostcatRequestDto } from 'src/core/dtos';

@Injectable()
export class CatCreateUseCaseService {
  constructor(private readonly catAbstractRepository: CatAbstractRepository) {}

  async createCat(postcatRequestDto: PostcatRequestDto) {
    const { name, age, breed } = postcatRequestDto;

    const catSchema = new Cat();
    catSchema.name = name;
    catSchema.age = age;
    catSchema.breed = breed;

    return await this.catAbstractRepository.createTypeCat(catSchema);
  }
}
