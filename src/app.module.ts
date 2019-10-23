import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { TechnologiesModule } from './technologies/technologies.module';

import * as config from 'config';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || config.get('db.uri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TechnologiesModule,
  ],
})
export class AppModule {}
