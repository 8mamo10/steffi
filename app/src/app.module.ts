import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostResolver } from './post/post.resolver';
import { UserResolver } from './user/user.resolver';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PostResolver, UserResolver],
})
export class AppModule {}
