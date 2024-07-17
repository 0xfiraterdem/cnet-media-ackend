import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AssetsService {
  private readonly repoUrl: string;
  private readonly network: string;

  constructor(private readonly configService: ConfigService) {
    this.repoUrl = this.configService.get('repoUrl');
    this.network = this.configService.getNetwork();
  }

  getTokenAssetDetailsUrl(tokenIdentifier: string): string {
    return `${this.repoUrl.replace('github.com', 'raw.githubusercontent.com').replace('/tree', '')}/main/${this.network}/tokens/${tokenIdentifier}/info.json`;
  }

  getImageUrl(tokenIdentifier: string, name: string): string {
    return `${this.repoUrl.replace('github.com', 'raw.githubusercontent.com').replace('/tree', '')}/main/${this.network}/tokens/${tokenIdentifier}/${name}`;
  }
}
