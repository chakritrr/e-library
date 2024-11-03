import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MONGOOSE_CONFIG } from 'src/configulations';
import {
  Cat,
  CatAbstractRepository,
  CatSchema,
  User,
  UserSchema,
} from 'src/core';
import { CatRepository } from 'src/repositories';

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
  ],
  exports: [CatAbstractRepository],
})
export class SchemasMongooseModule {}
