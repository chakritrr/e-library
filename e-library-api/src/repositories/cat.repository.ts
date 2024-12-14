import mongoose, { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Cat, CatAbstractRepository, PostcatRequestDto } from 'src/core';

@Injectable()
export class CatRepository implements CatAbstractRepository {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  create(postcatRequestDto: PostcatRequestDto): Promise<Cat> {
    const createdCat = new this.catModel(postcatRequestDto);
    return createdCat.save();
  }

  insertOne(postcatRequestDto: PostcatRequestDto): Promise<Cat> {
    const catSchema = new Cat();
    catSchema.name = postcatRequestDto.name;
    catSchema.age = postcatRequestDto.age;
    catSchema.breed = postcatRequestDto.breed;

    return this.catModel.create(catSchema);
  }

  async deleteCat(id: string) {
    const objectId = new mongoose.Types.ObjectId(id);
    await this.catModel.deleteOne(objectId);

    return { objectId };
  }

  updateCat(id: string, postcatRequestDto: PostcatRequestDto) {
    const updatedCat: Cat = {
      name: postcatRequestDto.name,
      age: postcatRequestDto.age,
      breed: postcatRequestDto.breed,
    };

    return this.catModel.findByIdAndUpdate(id, updatedCat, { new: true });
  }

  createTypeCat(catSchema: Cat) {
    return this.catModel.create(catSchema);
  }
}
