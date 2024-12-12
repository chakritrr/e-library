import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { DataServiceModule } from './freamworks/data-services/data-service.module';
import { CatController } from './controllers';
import { CatGetUseCaseServiceModule } from './use-case/cat-get/cat-get-use-case.module';
import { CatCreateUseCaseServiceModule } from './use-case/cat-create/cat-create-use-case.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    DataServiceModule,
    CatGetUseCaseServiceModule,
    CatCreateUseCaseServiceModule,
  ],
  controllers: [CatController],
})
export class AppModule {}
