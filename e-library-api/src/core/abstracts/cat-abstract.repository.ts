import { PostcatRequestDto } from '../dtos';
import { Cat } from '../schemas';

export abstract class CatAbstractRepository {
  abstract findAll(): Promise<Cat[]>;

  abstract create(postcatRequestDto: PostcatRequestDto): Promise<Cat>;

  abstract insertOne(postcatRequestDto: PostcatRequestDto): Promise<Cat>;

  abstract deleteCat(id: string);
}
