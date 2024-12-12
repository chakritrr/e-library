import { Module } from '@nestjs/common';

import { DataServiceModule } from 'src/freamworks/data-services/data-service.module';
import { CatGetUseCaseService } from './cat-get-use-case.service';

@Module({
  imports: [DataServiceModule],
  providers: [CatGetUseCaseService],
  exports: [CatGetUseCaseService],
})
export class CatGetUseCaseServiceModule {}
