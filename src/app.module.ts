import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { TechnologiesModule } from './technologies/technologies.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl',
    }),
    TechnologiesModule,
  ],
})
export class AppModule {}
