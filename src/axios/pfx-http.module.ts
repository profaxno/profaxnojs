import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PfxHttpService } from './pfx-http.service';

@Module({
  imports:[
    ConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        baseURL: configService.get('hostCommon'),
        headers: {
          'x-api-key': configService.get('apiKeyCommon')
        },
        timeout: configService.get('httpTimeout'),
        maxRedirects: configService.get('httpMaxRedirects')
      }),
      inject: [ConfigService]
    })
  ],
  providers: [PfxHttpService],
  exports: [PfxHttpService],
})
export class PfxHttpModule {}
