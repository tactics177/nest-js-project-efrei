import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, PlayerSchema } from './player.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
  ],
  providers: [PlayerService],
  exports: [PlayerService],
})
export class PlayersModule {}
