import { Controller, Post, Body, Get } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.model';

@Controller('teams')
export class TeamsController {
    constructor(private readonly teamService: TeamService) {}

    @Post()
    async create(@Body() createTeamDto: { name: string }): Promise<Team> {
        console.log(createTeamDto);
        return this.teamService.createTeam(createTeamDto.name);
    }

    @Get()
    async findAll(): Promise<Team[]> {
        return this.teamService.getAllTeams();
    }
}
