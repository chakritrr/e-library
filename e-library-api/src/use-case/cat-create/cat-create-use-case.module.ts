import { Module } from '@nestjs/common';

import { DataServiceModule } from 'src/freamworks/data-services/data-service.module';
import { CatCreateUseCaseService } from './cat-create-use-case.service';

@Module({
  imports: [DataServiceModule],
  providers: [CatCreateUseCaseService],
  exports: [CatCreateUseCaseService],
})
export class CatCreateUseCaseServiceModule {}
