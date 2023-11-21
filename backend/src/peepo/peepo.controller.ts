import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PeepoService } from './peepo.service';
import { CreatePeepoDto } from './dto/create-peepo.dto';
import { UpdatePeepoDto } from './dto/update-peepo.dto';

@Controller('peepo')
export class PeepoController {
  constructor(private readonly peepoService: PeepoService) {}

  @Post('create')
  create(@Body() createPeepoDto: CreatePeepoDto) {
    return this.peepoService.create(createPeepoDto);
  }

  @Get()
  findAll() {
    return this.peepoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peepoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeepoDto: UpdatePeepoDto) {
    return this.peepoService.update(+id, updatePeepoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peepoService.remove(+id);
  }
}
