import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User as Model } from './user.entity';
import { User } from '../graphql.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Model)
        private repository: Repository<Model>
    ){}

    public async create(user: User): Promise<User>  {
        return await this.repository.save(user);
    }

    public async readAll(): Promise<User[]>{
        return await this.repository.find({relations: ['posts']});
    }
}
