import { IsNotEmpty, IsString } from 'class-validator';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class TechnologyDto {
  @Field(() => ID)
  @IsString()
  readonly id?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  url: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}
