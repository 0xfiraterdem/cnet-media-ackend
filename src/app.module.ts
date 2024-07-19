import { Module } from '@nestjs/common';
import { AssetsController } from './assets/assets.controller';
import { ConfigService } from './config/config.service';
import { AssetsService } from './assets/assets.service';
import { NftAssetsController } from './assets/nft.assets.controller';

@Module({
  imports: [],
  controllers: [AssetsController ,NftAssetsController],
  providers: [ConfigService, AssetsService],
})
export class AppModule {}
