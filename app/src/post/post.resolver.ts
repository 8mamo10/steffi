import {
  Args,
  Field,
  InputType,
  Resolver,
  Query,
  Mutation,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Post } from './post.models';
import { PrismaService } from '../prisma.service';

@InputType()
export class PostCreateInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  content: string;
}

@Resolver(Post)
export class PostResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => Post, { nullable: true })
  getPostById(@Args('id') id: number) {
    return this.prismaService.post.findUnique({
      include: {
        author: true,
      },
      where: { id },
    });
  }

  @Query((returns) => [Post])
  getAllPosts() {
    const posts = this.prismaService.post.findMany({
      include: {
        author: true,
      },
    });
    return posts;
  }

  @Query((returns) => [Post])
  getPublishedPosts() {
    return this.prismaService.post.findMany({
      where: { published: true },
    });
  }

  @Query((returns) => [Post])
  getFilteredPosts(@Args('searchString') searchString: string) {
    return this.prismaService.post.findMany({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },

          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @Mutation((returns) => Post)
  createDraft(
    @Args('data') data: PostCreateInput,
    @Args('authorEmail') authorEmail: string,
  ) {
    return this.prismaService.post.create({
      data: {
        title: data.title,

        content: data.content,

        author: {
          connect: { email: authorEmail },
        },
      },
    });
  }

  @Mutation((returns) => Post, { nullable: true })
  publishPost(@Args('id') id: string) {
    return this.prismaService.post.update({
      where: { id: Number(id) },

      data: { published: true },
    });
  }

  @Mutation((returns) => Post, { nullable: true })
  deletePost(@Args('id') id: string) {
    return this.prismaService.post.delete({
      where: { id: Number(id) },
    });
  }
}
