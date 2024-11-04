import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Cat, CatAbstractRepository } from 'src/core';
import { PostcatRequestDto } from 'src/core/dtos';

@Injectable()
export class CatRepository implements CatAbstractRepository {
  constructor(
    @InjectModel(Cat.name) private readonly catModel: Model<Cat>
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  create(postcatRequestDto: PostcatRequestDto): Promise<Cat> {
    const createdCat = new this.catModel(postcatRequestDto);
    return createdCat.save();
  }
}
