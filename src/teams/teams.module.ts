import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from './team.model';
import { TeamService } from './team.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }])],
    providers: [TeamService],
    exports: [TeamService],
})
export class TeamsModule {}
