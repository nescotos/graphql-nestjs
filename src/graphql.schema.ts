
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreatePostInput {
    title?: string;
    description?: string;
    userId?: number;
}

export class CreateUserInput {
    name?: string;
    username?: string;
}

export abstract class IQuery {
    abstract getPosts(): Post[] | Promise<Post[]>;

    abstract getUsers(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(id: string, updatePostInput: CreatePostInput): Post | Promise<Post>;

    abstract createUser(createUserInput?: CreateUserInput): User | Promise<User>;
}

export class Post {
    id?: number;
    title?: string;
    description?: string;
}

export class User {
    id?: number;
    name?: string;
    username?: string;
    posts?: Post[];
}
