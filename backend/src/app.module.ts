import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeepoModule } from './peepo/peepo.module';

@Module({
  imports: [PeepoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
