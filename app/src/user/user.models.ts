import 'reflect-metadata';

import { Field, ObjectType, Int } from '@nestjs/graphql';

import { Post } from '../post/post.models';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  email: string;

  @Field((type) => String, { nullable: true })
  name?: string | null;

  @Field((type) => [Post], { nullable: true })
  posts?: [Post] | null;
}
