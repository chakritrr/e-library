import { User } from '../schemas';

export abstract class IUserRepository {
  abstract create(postUserRequestDto: User): Promise<User>;
}
