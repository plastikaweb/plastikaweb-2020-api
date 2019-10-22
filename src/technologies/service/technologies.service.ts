import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { TechnologyDto } from '../dto/technology.dto';
import { Technology } from '../models/technology';

import { Model } from 'mongoose';

@Injectable()
export class TechnologiesService {
  constructor(
    @InjectModel('Technologies')
    private readonly technologyModel: Model<Technology>,
  ) {}

  async findAll(): Promise<Technology[]> {
    return await this.technologyModel.find().exec();
  }

  async findOneById(id: string): Promise<Technology> {
    return await this.technologyModel.findById(id);
  }

  async create(createTechnologyDto: TechnologyDto): Promise<Technology> {
    const createdTechnology = new this.technologyModel(createTechnologyDto);
    return await createdTechnology.save();
  }

  async update(
    id: string,
    updateTechnologyDto: TechnologyDto,
  ): Promise<Technology> {
    return await this.technologyModel.findByIdAndUpdate(
      id,
      updateTechnologyDto,
      { new: true },
    );
  }

  async delete(id: string): Promise<Technology> {
    return await this.technologyModel.findByIdAndRemove(id);
  }
}
