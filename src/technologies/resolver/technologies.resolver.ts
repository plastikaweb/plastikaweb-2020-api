import { Body, Param } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

import { TechnologyDto } from '../dto/technology.dto';
import { TechnologyInput } from '../dto/tecnology.input';
import { TechnologiesService } from '../service/technologies.service';

@Resolver('Technologies')
export class TechnologiesResolver {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Query(() => [TechnologyDto])
  async getTechnologies() {
    return this.technologiesService.findAll();
  }

  @Query(() => TechnologyDto)
  async getTechnology(@Param('id') id: string) {
    return this.technologiesService.findOneById(id);
  }

  @Mutation(() => TechnologyDto)
  async createTechnology(@Args('input') input: TechnologyInput) {
    return this.technologiesService.create(input);
  }

  @Mutation(() => TechnologyDto)
  async updateTechnology(
    @Args('id') id: string,
    @Args('input') input: TechnologyInput,
  ) {
    return this.technologiesService.update(id, input);
  }

  @Mutation(() => TechnologyDto)
  async deleteTechnology(@Args('id') id: string) {
    return this.technologiesService.delete(id);
  }
}
