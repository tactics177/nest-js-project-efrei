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
import { User, UserSchema } from './auth/user.model';
import { ConfigModule } from '@nestjs/config';
import { TeamsController } from './teams/teams.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URI, {dbName: 'football',}), TeamsModule, AuthModule, PlayersModule, MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]), MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [AppController, FootballController, TeamsController, AuthController],
  providers: [AppService, TeamService, PlayerServiceService, AuthService],
})
export class AppModule {}
