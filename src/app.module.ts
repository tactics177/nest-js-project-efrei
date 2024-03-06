import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { FootballController } from './football.controller';
import { TeamService } from './teams/team.service';
import { PlayerService } from './players/player.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from './teams/team.model';
import { User, UserSchema } from './auth/user.model';
import { ConfigModule } from '@nestjs/config';
import { TeamsController } from './teams/teams.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { PlayersController } from './players/players.controller';
import { Player, PlayerSchema } from './players/player.model';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URI, {dbName: 'football',}), TeamsModule, AuthModule, PlayersModule, MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]), MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }])],
  controllers: [AppController, FootballController, TeamsController, AuthController, PlayersController],
  providers: [AppService, TeamService, PlayerService, AuthService],
})
export class AppModule {}
