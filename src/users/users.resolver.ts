import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from 'src/graphql.schema';
import { UsersService } from './users.service';

@Resolver('Users')
export class UsersResolver {
    constructor(private readonly usersService: UsersService){}

    @Mutation('createUser')
    async create(
        @Args('createUserInput') args: CreateUserInput
    ) {
        return await this.usersService.create(args);
    }
}
