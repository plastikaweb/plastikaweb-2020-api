import { Module } from '@nestjs/common';

import { TechnologiesResolver } from './technologies.resolver';

@Module({
  providers: [TechnologiesResolver],
})
export class TechnologiesModule {}
