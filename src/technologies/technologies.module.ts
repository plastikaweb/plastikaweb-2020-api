import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TechnologiesResolver } from './resolver/technologies.resolver';
import { TechnologiesService } from './service/technologies.service';
import { TechnologySchema } from './technology.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Technologies', schema: TechnologySchema },
    ]),
  ],
  providers: [TechnologiesResolver, TechnologiesService],
})
export class TechnologiesModule {}
