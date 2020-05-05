import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post as Model } from './post.entity';
import { Post } from '../graphql.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Model)
    private repository: Repository<Model>,
  ) {}

  public async create(post: Post): Promise<Post> {
    return await this.repository.save(post);
  }

  public async readAll(): Promise<Post[]> {
    return await this.repository.find();
  }

  public async update(id: number, data: Post): Promise<Post>{
    console.log('here');
    await this.repository.update(id, data);
    return await this.repository.findOne(id);
  }

  public async delete(id: number): Promise<Post>{
    const postToBeDeleted = await this.repository.findOne(id);
    await this.repository.softDelete(id);
    return postToBeDeleted;
  }
}
