import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CreateUserInput, User } from 'src/graphql.schema';
import { UsersService } from './users.service';

@Resolver('Users')
export class UsersResolver {
    constructor(private readonly usersService: UsersService){}

    @Query()
    async getUsers(): Promise<User[]> {
        return await this.usersService.readAll();
    }

    @Mutation('createUser')
    async create(
        @Args('createUserInput') args: CreateUserInput
    ) {
        return await this.usersService.create(args);
    }
}
