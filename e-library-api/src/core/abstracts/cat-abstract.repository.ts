import { PostcatRequestDto } from '../dtos';
import { Cat } from '../schemas';

export abstract class CatAbstractRepository {
  abstract findAll(): Promise<Cat[]>;

  abstract create(postcatRequestDto: Cat): Promise<Cat>;

  abstract insertOne(postcatRequestDto: PostcatRequestDto): Promise<Cat>;

  abstract deleteCat(id: string);

  abstract createTypeCat(catSchema: Cat): Promise<Cat>;
}
