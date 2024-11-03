import { Module } from '@nestjs/common';
import { SchemasMongooseModule } from './mongoose/schemas-mongooes.module';

@Module({
  imports: [SchemasMongooseModule],
  exports: [SchemasMongooseModule],
})
export class DataServiceModule {}
