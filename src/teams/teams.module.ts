import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from './team.model';
import { TeamService } from './team.service';
import { TeamMiddleware } from './team.middleware';

@Module({
    imports: [MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }])],
    providers: [TeamService],
    exports: [TeamService],
})
export class TeamsModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(TeamMiddleware)
          .forRoutes({ path: 'teams', method: RequestMethod.GET });
      }
}
