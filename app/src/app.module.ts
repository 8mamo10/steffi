import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostResolver } from './post/post.resolver';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PostResolver],
})
export class AppModule {}
