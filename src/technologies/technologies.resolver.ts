import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Technologies')
export class TechnologiesResolver {
  @Query(() => String)
  async getHello() {
    return 'hello';
  }
}
