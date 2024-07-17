import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { Response } from 'express';

@Controller('tokens/asset')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get(':tokenIdentifier/info.json')
  async getTokenInfo(
    @Param('tokenIdentifier') tokenIdentifier: string,
    @Res() res: Response
  ) {
    const infoUrl = this.assetsService.getTokenAssetDetailsUrl(tokenIdentifier);
    res.redirect(infoUrl);
  }

  @Get(':tokenIdentifier/:imageName')
  async getTokenImage(
    @Param('tokenIdentifier') tokenIdentifier: string,
    @Param('imageName') imageName: string,
    @Res() res: Response
  ) {
    const imageUrl = this.assetsService.getImageUrl(tokenIdentifier, imageName);
    res.redirect(imageUrl);
  }
}
