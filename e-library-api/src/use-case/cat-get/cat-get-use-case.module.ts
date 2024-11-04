import { Module } from '@nestjs/common';

import { CatGetUseCase } from './cat-get-use-case';
import { DataServiceModule } from 'src/freamworks/data-services/data-service.module';
import { CatGetFactoryService } from './cat-get-factory.service';

@Module({
  imports: [DataServiceModule],
  providers: [CatGetUseCase, CatGetFactoryService],
  exports: [CatGetUseCase, CatGetFactoryService],
})
export class CatGetUseCaseModule {}
