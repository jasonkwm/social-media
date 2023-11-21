import { Module } from '@nestjs/common';
import { PeepoService } from './peepo.service';
import { PeepoController } from './peepo.controller';

@Module({
  controllers: [PeepoController],
  providers: [PeepoService],
})
export class PeepoModule {}
