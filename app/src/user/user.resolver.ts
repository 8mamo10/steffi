import { InputType, Field, Resolver, Args, Mutation } from '@nestjs/graphql';

import { Inject } from '@nestjs/common';

import { User } from '../user.models';

import { PrismaService } from 'prisma/prisma.service';

@InputType()
export class UserCreateInput {
  @Field({ nullable: true })
  name: string | null;

  @Field()
  email: string;
}

@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Mutation((returns) => User)
  signupUser(@Args('data') data: UserCreateInput) {
    return this.prismaService.user.create({
      data: {
        name: data.name,

        email: data.email,
      },
    });
  }
}
