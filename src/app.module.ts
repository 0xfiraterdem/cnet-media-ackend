import { Module } from '@nestjs/common';
import { AssetsController } from './assets/assets.controller';
import { ConfigService } from './config/config.service';
import { AssetsService } from './assets/assets.service';

@Module({
  imports: [],
  controllers: [AssetsController],
  providers: [ConfigService, AssetsService],
})
export class AppModule {}
