import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ConfigService {
  private config: any;
  private network: string;

  constructor() {
    const env = process.env.NODE_ENV || 'testnet';
    this.network = env;

    const configPath = path.resolve(process.cwd(), 'dist', 'config', 'config.json');
    if (fs.existsSync(configPath)) {
      this.config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    } else {
      throw new Error(`Config file not found at path: ${configPath}`);
    }
  }

  get(key: string): any {
    return this.config[key];
  }

  getNetwork(): string {
    return this.network;
  }
}
