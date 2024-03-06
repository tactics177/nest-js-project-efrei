import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { FootballController } from './football.controller';
import { TeamService } from './teams/team.service';
import { PlayerServiceService } from './players/player-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from './teams/team.model';
import { ConfigModule } from '@nestjs/config';
import { TeamsController } from './teams/teams.controller';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URI, {dbName: 'football',}), TeamsModule, PlayersModule, MongooseModule.forFeature([{ name: "Team", schema: TeamSchema }])],
  controllers: [AppController, FootballController, TeamsController],
  providers: [AppService, TeamService, PlayerServiceService],
})
export class AppModule {}
