
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    name?: string;
    username?: string;
}

export abstract class IQuery {
    abstract getUsers(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract createUser(createUserInput?: CreateUserInput): User | Promise<User>;
}

export class User {
    id?: number;
    name?: string;
    username?: string;
}
