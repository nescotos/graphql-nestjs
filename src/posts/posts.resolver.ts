import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post, CreatePostInput } from 'src/graphql.schema';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Posts')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query()
  async getPosts(): Promise<Post[]> {
    return await this.postsService.readAll();
  }

  @Mutation('createPost')
  async create(@Args('createPostInput') args: CreatePostInput) {
    return await this.postsService.create(args);
  }

  @Mutation('updatePost')
  async update(
    @Args('id', ParseIntPipe) id: number,  
    @Args('updatePostInput') args: CreatePostInput) {
    return await this.postsService.update(id, args);
  }

  @Mutation('deletePost')
  async delete(
    @Args('id', ParseIntPipe) id: number) {
    return await this.postsService.delete(id);
  }
}
