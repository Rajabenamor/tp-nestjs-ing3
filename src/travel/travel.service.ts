import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';

@Injectable()
export class TravelService {
  private trips = [
    {id:1,name:'To China',price: 9000},
    {id:1,name:'To Moroco',price: 4000},
  ];
  create(createTravelDto: CreateTravelDto) {
    return 'planifier un nouveau voyage ici !';
  }

  findAll() {
    return this.trips;
  }

  findOne(id: number) {
    return `This action returns a #${id} travel`;
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
  ///addddddddd
  //adddddd
}
