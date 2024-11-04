import { PostcatRequestDto } from '../dtos';
import { Cat } from '../schemas';

export abstract class CatAbstractRepository {
  abstract findAll(): Promise<Cat[]>;

  abstract create(postcatRequestDto: PostcatRequestDto): Promise<Cat>;
}
