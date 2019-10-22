import { Field, InputType } from 'type-graphql';

@InputType()
export class TechnologyInput {
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field()
  readonly url: string;
  @Field()
  readonly imageUrl: string;
}
