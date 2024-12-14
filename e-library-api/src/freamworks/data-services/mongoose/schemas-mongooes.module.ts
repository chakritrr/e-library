import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MONGOOSE_CONFIG } from 'src/configulations';
import {
  Cat,
  CatAbstractRepository,
  CatSchema,
  IUserRepository,
  User,
  UserSchema,
} from 'src/core';
import { CatRepository, UserRepository } from 'src/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema },
      { name: User.name, schema: UserSchema },
    ]),
    MONGOOSE_CONFIG,
  ],
  providers: [
    {
      provide: CatAbstractRepository,
      useClass: CatRepository,
    },
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
  exports: [CatAbstractRepository, IUserRepository],
})
export class SchemasMongooseModule {}
