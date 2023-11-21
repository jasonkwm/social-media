import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePeepoDto } from './dto/create-peepo.dto';
import { UpdatePeepoDto } from './dto/update-peepo.dto';

type TempDbT = {
  id: number;
  username: string;
  password: string;
};

let latestId = 5;

const tempDb: TempDbT[] = [
  {
    id: 1,
    username: 'jakoh',
    password: 'jakoh',
  },
  {
    id: 2,
    username: 'takoh',
    password: 'takoh',
  },
  {
    id: 3,
    username: 'dakoh',
    password: 'dakoh',
  },
  {
    id: 4,
    username: 'bakoh',
    password: 'bakoh',
  },
  {
    id: 5,
    username: 'sakoh',
    password: 'sakoh',
  },
];

@Injectable()
export class PeepoService {
  create(createPeepoDto: CreatePeepoDto) {
    tempDb.push({ id: ++latestId, ...createPeepoDto });
    const exist = tempDb.filter(
      (peepo) => peepo.username === createPeepoDto.username,
    );
    if (exist.length !== 0) {
      throw new HttpException(
        'Username already exist.',
        HttpStatus.I_AM_A_TEAPOT,
      );
    }
    return tempDb;
  }

  findAll() {
    return tempDb;
  }

  findOne(id: number) {
    return tempDb.filter((peepo) => peepo.id === id)[0];
  }

  update(id: number, updatePeepoDto: UpdatePeepoDto) {
    return tempDb.map((peepo) =>
      peepo.id === id ? { ...peepo, ...updatePeepoDto } : peepo,
    );
  }

  remove(id: number) {
    return tempDb.filter((peepo) => peepo.id != id);
  }
}
