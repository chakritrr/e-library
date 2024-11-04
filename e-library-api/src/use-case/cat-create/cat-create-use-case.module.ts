import { Module } from '@nestjs/common';

import { DataServiceModule } from 'src/freamworks/data-services/data-service.module';
import { CatCreateUseCase } from './cat-create-use-case';
import { CatCreateFactoryService } from './cat-create-factory.service';

@Module({
  imports: [DataServiceModule],
  providers: [CatCreateUseCase, CatCreateFactoryService],
  exports: [CatCreateUseCase, CatCreateFactoryService],
})
export class CatCreateUseCaseModule {}
