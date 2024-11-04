import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { DataServiceModule } from './freamworks/data-services/data-service.module';
import { CatController } from './controllers';
import { CatGetUseCaseModule } from './use-case/cat-get/cat-get-use-case.module';
import { CatCreateUseCaseModule } from './use-case/cat-create/cat-create-use-case.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    DataServiceModule,
    CatGetUseCaseModule,
    CatCreateUseCaseModule,
  ],
  controllers: [CatController],
})
export class AppModule {}
