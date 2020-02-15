import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TweetsController} from './tweets.controller';
import { Tweet } from './tweet.entity';
import { TweetsService } from './tweets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet])],
  providers: [TweetsService],
  controllers: [TweetsController],
})
export class TweetsModule {}
