import { PartialType } from '@nestjs/mapped-types';
import { CreatePeepoDto } from './create-peepo.dto';

export class UpdatePeepoDto extends PartialType(CreatePeepoDto) {}
