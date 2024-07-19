import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { Response } from 'express';

@Controller('nfts/asset')
export class NftAssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get(':cid/:fileName.json')
  async getNftInfo(
    @Param('cid') cid: string,
    @Param('fileName') fileName: string,
    @Res() res: Response
  ) {
    const infoUrl = this.assetsService.getNftAssetDetailsUrl(cid, fileName);
    res.redirect(infoUrl);
  }

  @Get(':cid/:fileName.webp')
  async getNftImage(
    @Param('cid') cid: string,
    @Param('fileName') fileName: string,
    @Res() res: Response
  ) {
    const imageUrl = this.assetsService.getNftImageUrl(cid, fileName);
    res.redirect(imageUrl);
  }
}
